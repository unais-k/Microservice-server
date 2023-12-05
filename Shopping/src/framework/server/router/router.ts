import { Application } from "express";
import OrderRoute from "./order";
import CartRoute from "./cart";

const routes = async (app: Application) => {
    app.use("/api/order", OrderRoute());
    app.use("/api/cart", CartRoute());
};

export default routes;
