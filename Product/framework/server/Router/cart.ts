import express from "express";
import ProductController from "../../../src/Adapter/productController";
import { productDBRepository } from "../../../src/Application/Repositors/product";
import { productRepositoryMongoDB } from "../../repositories/product";
import { clientVerifyToken } from "../Middleware/auth";
import { createChannel } from "../../../src/Utils/Channel";

const CartRoute = () => {
    const router = express.Router();
    const channel = createChannel();

    const controller = ProductController(productDBRepository, productRepositoryMongoDB, channel);

    router.put("/add-to-cart-api", clientVerifyToken, controller.AddToCartController);
    router.put("/add-to-wishlist-api", clientVerifyToken, controller.AddToWishlistController);

    return router;
};
export default CartRoute;
