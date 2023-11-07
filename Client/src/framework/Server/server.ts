import { Server } from "http";
import configKeys from "../../Utils/config";
import logging from "../../Utils/logging";

const serverConfig = (server: Server) => {
    server.listen(configKeys.PORT, () => {
        logging.info(`Server listening on Port ${configKeys.PORT}`);
    });
};

export default serverConfig;
