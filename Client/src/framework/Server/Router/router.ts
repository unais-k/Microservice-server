import { Application } from "express";
import AuthRoute from "./auth";
import AddressRoute from "./address";

const routes = (app: Application) => {
    app.use("/api/auth", AuthRoute());
    app.use("/api/address", AddressRoute());
};

export default routes;
