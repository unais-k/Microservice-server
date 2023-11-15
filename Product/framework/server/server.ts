import { Server } from "http";
import logging from "./../../src/Utils/logging";
import configENV from "../../src/Utils/config";

const serverConfig = (server: Server) => {
    server.listen(configENV.PORT, () => {
        logging.info(`Server listening on Port ${configENV.PORT}`);
    });
};

export default serverConfig;
