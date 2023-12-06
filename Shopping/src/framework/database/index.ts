import mongoose from "mongoose";
import configENV from "../../utils/config";
import logging from "../../utils/loggings";
const connectDB = async () => {
    try {
        mongoose
            .connect(configENV.mongo.url, configENV.mongo.options)
            .then(() => {
                logging.info("Mongo connected.");
            })
            .catch((error) => {
                logging.error(error);
            });
    } catch (error: any) {
        logging.error(error);
    }
};
export default connectDB;
