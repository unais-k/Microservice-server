import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { CartInterfaceServices } from "../Application/Repositors/cart";
import { CartServiceMS } from "../../framework/repositories/cart";

const CartController = (CartIFService: CartInterfaceServices, CartService: CartServiceMS) => {
    const cartServiceAdapter = CartIFService(CartService());

    const AddToCart = asyncHandler(async (req: Request, res: Response) => {
        const productId = req.params.toString();
        const response = "api";
        res.json({ status: "success", message: "found product", response });
    });

    return { AddToCart };
};

export default CartController;
