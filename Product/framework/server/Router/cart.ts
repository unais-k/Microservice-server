import express from "express";
import ProductController from "../../../src/Adapter/productController";
import { productDBRepository } from "../../../src/Application/Repositors/product";
import { productRepositoryMongoDB } from "../../repositories/product";

const CartRoute = () => {
    const router = express.Router();

    const controller = ProductController(productDBRepository, productRepositoryMongoDB);

    router.post("/add-to-cart-api", controller.AddToCartController);

    return router;
};
export default CartRoute;
