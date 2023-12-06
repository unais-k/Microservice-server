import { Server } from "http";
import configENV from "../../utils/config";
import logging from "../../utils/loggings";

const serverConfig = (server: Server) => {
    server.listen(configENV.PORT, () => {
        logging.info(`Server listening on Port ${configENV.PORT}`);
    });
};

export default serverConfig;
