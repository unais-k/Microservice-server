import * as amqp from "amqplib";
import configENV from "./config";
import logging from "./logging";

export async function createChannel(): Promise<amqp.Channel> {
    try {
        const connection = await amqp.connect(configENV.MSG_QUEUE_URL);
        const channel = await connection.createChannel();
        await channel.assertQueue(configENV.EXCHANGE_NAME, { durable: true });

        logging.info("Channel created successfully");
        return channel;
    } catch (error: any) {
        logging.error("Error creating channel:", error.message);
        throw error;
    }
}

interface PublishMessageParams {
    channel: amqp.Channel;
    service: string;
    msg: string;
}

export function publishMessage({ channel, service, msg }: PublishMessageParams): void {
    channel.publish(configENV.EXCHANGE_NAME, service, Buffer.from(msg));
    logging.info("Sent: ", msg);
}

interface SubscribeMessageParams {
    channel: amqp.Channel;
    service: {
        SubscribeEvents: (message: string) => void;
    };
}

export async function subscribeMessage({ channel, service }: SubscribeMessageParams): Promise<void> {
    await channel.assertExchange(configENV.EXCHANGE_NAME, "direct", { durable: true });
    const q = await channel.assertQueue("", { exclusive: true });
    logging.info(`Waiting for messages in queue: ${q.queue}`);

    channel.bindQueue(q.queue, configENV.EXCHANGE_NAME, configENV.CUSTOMER_SERVICE);

    channel.consume(
        q.queue,
        (msg: amqp.Message | null) => {
            if (msg && msg.content) {
                logging.info("The message is:", msg.content.toString());
                service.SubscribeEvents(msg.content.toString());
            }
            logging.info("[X] received");
        },
        {
            noAck: true,
        }
    );
}
