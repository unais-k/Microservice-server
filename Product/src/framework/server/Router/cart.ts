import express from "express";
import { productRepositoryMongoDB } from "../../repositories/product";
import { clientVerifyToken } from "../Middleware/auth";
import ProductController from "../../../Adapter/productController";
import { productDBRepository } from "../../../Application/Repositors/product";

const CartRoute = () => {
    const router = express.Router();

    const controller = ProductController(productDBRepository, productRepositoryMongoDB);

    router.put("/add-to-cart-api", clientVerifyToken, controller.AddToCartController);
    router.put("/add-to-wishlist-api", clientVerifyToken, controller.AddToWishlistController);

    return router;
};
export default CartRoute;
