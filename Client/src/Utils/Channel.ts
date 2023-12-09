// import * as amqp from "amqplib";
// import configENV from "./config";
// import logging from "./logging";

// export async function createChannel(): Promise<amqp.Channel> {
//     let connection;
//     try {
//         connection = await amqp.connect(configENV.MSG_QUEUE_URL);
//         const channel = await connection.createChannel();
//         await channel.assertQueue(configENV.EXCHANGE_NAME, { durable: true });

//         logging.info("Channel created ");
//         return channel;
//     } catch (error: any) {
//         console.log(error.message, "line 15 =================");
//         console.error("Error creating channel:", error.message, "\n", error.stack);
//         throw error;
//     }
// }

// interface PublishMessageParams {
//     channel: Promise<amqp.Channel>;
//     service: string;
//     msg: string;
// }

// export async function publishMessage({ channel, service, msg }: PublishMessageParams): Promise<void> {
//     const resolvedChannel = await channel;
//     resolvedChannel.publish(configENV.EXCHANGE_NAME, service, Buffer.from(msg));
// }

// interface SubscribeMessageParams {
//     channel: amqp.Channel;
//     service: {
//         SubscribeEvents: (message: string) => void;
//     };
// }

// export async function subscribeMessage({ channel, service }: SubscribeMessageParams): Promise<void> {
//     await channel.assertExchange(configENV.EXCHANGE_NAME, "direct", { durable: true });
//     const q = await channel.assertQueue("", { exclusive: true });
//     logging.info(`Waiting for messages in queue: ${q.queue}`);

//     channel.bindQueue(q.queue, configENV.EXCHANGE_NAME, configENV.CUSTOMER_SERVICE);

//     channel.consume(
//         q.queue,
//         (msg: amqp.Message | null) => {
//             if (msg && msg.content) {
//                 logging.info("The message is:", msg.content.toString());
//                 service.SubscribeEvents(msg.content.toString());
//             }
//             logging.info("[X] received");
//         },
//         {
//             noAck: true,
//         }
//     );
// }

import * as amqp from "amqplib";
import configENV from "./config";
import logging from "./logging";

let connection: amqp.Connection;
let channel: amqp.Channel;

export async function createChannel(): Promise<void> {
    try {
        connection = await amqp.connect(configENV.MSG_QUEUE_URL);
        channel = await connection.createChannel();

        await channel.assertQueue(configENV.EXCHANGE_NAME, { durable: true });

        logging.info("Channel created successfully");
    } catch (error: any) {
        logging.error("Error creating channel:", error.message);
        throw error;
    }
}

export function closeConnection(): void {
    if (channel) {
        channel.close();
    }

    if (connection) {
        connection.close();
        logging.info("Connection closed");
    }
}
interface PublishMessageParams {
    service: string;
    msg: string;
}

export function publishMessage({ service, msg }: PublishMessageParams): void {
    if (!channel) {
        logging.error("Channel is not initialized. Call createChannel() first.");
        return;
    }

    // Use the exchange name as the routing key
    channel.publish(configENV.EXCHANGE_NAME, service, Buffer.from(msg));
    logging.info(`Sent message to service '${service}': ${msg}`);
}

interface SubscribeMessageParams {
    service: {
        SubscribeEvents: (message: string) => void;
    };
}

export async function subscribeMessage({ service }: SubscribeMessageParams): Promise<void> {
    if (!channel) {
        logging.error("Channel is not initialized. Call createChannel() first.");
        return;
    }

    await channel.assertExchange(configENV.EXCHANGE_NAME, "direct", { durable: true });
    const q = await channel.assertQueue("", { exclusive: true });

    logging.info(`Waiting for messages in queue: ${q.queue}`);

    channel.bindQueue(q.queue, configENV.EXCHANGE_NAME, configENV.CUSTOMER_SERVICE);

    channel.consume(
        q.queue,
        (msg: amqp.Message | null) => {
            if (msg && msg.content) {
                logging.info("Received message:", msg.content.toString());
                service.SubscribeEvents(msg.content.toString());
            }
            logging.info("[X] received");
        },
        {
            noAck: true,
        }
    );
}
