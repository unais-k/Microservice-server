import { Application } from "express";
import ProductRoute from "./product";
import CartRoute from "./cart";

const routes = (app: Application) => {
    app.use("/api/product", ProductRoute());
    app.use("/api/cart", CartRoute());
};

export default routes;
