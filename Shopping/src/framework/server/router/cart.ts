import express from "express";
import CartController from "../../../adapter/cartController";
const CartRoute = () => {
    const router = express.Router();

    const controller = CartController();

    router.get("/get-cart", controller.getCartController);
    router.delete("/remove-from-cart", controller.removeFromCart);

    return router;
};
export default CartRoute;
