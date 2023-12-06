import { Application } from "express";
import ProductRoute from "./product";
import CartRoute from "./cart";
import { createChannel } from "../../../src/Utils/Channel";

const routes = (app: Application) => {
    let channel = createChannel();
    app.use("/api/product", ProductRoute());
    app.use("/api/cart", CartRoute());
};

export default routes;
