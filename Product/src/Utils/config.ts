import * as dotenv from "dotenv";

dotenv.config();

const configENV = {
    mongo: {
        options: {
            socketTimeoutMS: 300000,
            maxPoolSize: 50,
            autoIndex: false,
            retryWrites: false,
        },
        url: process.env.MONGO_URL as string,
    },
    PORT: process.env.PORT as string,
    JWT_KEY: process.env.JWT_SECRET as string,
    EXCHANGE_NAME: process.env.EXCHANGE_NAME as string,
    MSG_QUEUE_URL: process.env.MSG_QUEUE_URL as string,
    CUSTOMER_SERVICE: "CUSTOMER_SERVICE",
    SHOPPING_SERVICE: "SHOPPING_SERVICE",
    CLOUD_NAME: process.env.CLOUD_NAME as string,
    API_KEY: process.env.API_KEY as string,
    API_SECRET: process.env.API_SECRET as string,
};

export default configENV;
