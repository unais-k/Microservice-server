import { Server } from "http";
import configKeys from "../../Utils/config";

const serverConfig = (server: Server) => {
    server.listen(configKeys.PORT, () => {
        console.log(`Server listening on Port ${configKeys.PORT}`);
    });
};

export default serverConfig;
