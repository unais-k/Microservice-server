import { Request, Response } from "express";
import { ProductRepositoryMongoDB } from "../../framework/repositories/product";
import { ProductDBInterface } from "../Application/Repositors/product";
import asyncHandler from "express-async-handler";
import { ProductInterface } from "./../types/common";
import { AddProduct, FindProduct, AddToCart, GetAllProduct, GetProductPayload } from "../Application/useCases/product";
import logging from "../Utils/logging";
import { publishMessage } from "../Utils/Channel";
import configENV from "./../Utils/config";
import * as amqp from "amqplib";

const ProductController = (
    productDBRepository: ProductDBInterface,
    productDbRepositoryImpl: ProductRepositoryMongoDB,
    channel: amqp.Channel
) => {
    const ProductRepo = productDBRepository(productDbRepositoryImpl());

    const addProductController = asyncHandler(async (req: Request, res: Response) => {
        const product: ProductInterface = req.body;
        logging.info(req.body);
        const response = await AddProduct(product, ProductRepo);
        console.log(response);
        res.json({
            status: "success",
            message: "product added",
            response,
        });
    });

    const ProductFindController = asyncHandler(async (req: Request, res: Response) => {
        const productId = req.params.toString();
        const response = await FindProduct(productId, ProductRepo);
        res.json({
            status: "success",
            message: "found product",
            response,
        });
    });

    const GetAllProductController = asyncHandler(async (req: Request, res: Response) => {
        const response = await GetAllProduct(ProductRepo);
        res.json({
            status: "success",
            message: "found product",
            response,
        });
    });

    const AddToCartController = asyncHandler(async (req: Request, res: Response) => {
        const userId = req.body.user;
        const { productId, qty } = req.body;
        const response = GetProductPayload(userId, productId, qty, ProductRepo, "ADD_TO_CART");
        // send to both client and shopping
        res.json({ status: "success", message: "found product", response });
    });

    const AddToWishlistController = asyncHandler(async (req: Request, res: Response) => {
        const userId = req.body.user;
        const { productId, qty } = req.body;

        const response = GetProductPayload(userId, productId, qty, ProductRepo, "ADD_TO_WISHLIST");
        publishMessage({ channel: channel, service: configENV.CUSTOMER_SERVICE, msg: JSON.stringify(response) });

        // send response to client side with channel
        res.json({ status: "success", message: "Added to wishlist", response });
    });

    return {
        addProductController,
        ProductFindController,
        AddToCartController,
        GetAllProductController,
        AddToWishlistController,
    };
};
export default ProductController;
