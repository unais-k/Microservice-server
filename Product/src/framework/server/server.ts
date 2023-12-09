import { Server } from "http";
import configENV from "../../Utils/config";
import logging from "../../Utils/logging";

const serverConfig = (server: Server) => {
    server.listen(configENV.PORT, () => {
        logging.info(`Server listening on Port ${configENV.PORT}`);
    });
};

export default serverConfig;
