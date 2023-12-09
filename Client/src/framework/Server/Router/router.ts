import { Application } from "express";
import AuthRoute from "./auth";
import AddressRoute from "./address";
import userRoute from "./user";

const routes = async (app: Application) => {
    app.use("/api/auth", AuthRoute());
    app.use("/api/user", userRoute());
    app.use("/api/address", AddressRoute());
};

export default routes;
