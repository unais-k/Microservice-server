import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

const CartController = () => {
    const getCartController = asyncHandler(async (req: Request, res: Response) => {});

    const removeFromCart = asyncHandler(async (req: Request, res: Response) => {});

    return { getCartController, removeFromCart };
};

export default CartController;
