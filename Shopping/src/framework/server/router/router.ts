import { Application } from "express";
import OrderRoute from "./order";
import CartRoute from "./cart";
import { createChannel } from "../../../utils/channel";

const routes = async (app: Application) => {
    const channel = createChannel();
    app.use("/api/order", OrderRoute());
    app.use("/api/cart", CartRoute());
};

export default routes;
