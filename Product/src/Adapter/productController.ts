import { Request, Response } from "express";
import { ProductRepositoryMongoDB } from "../../framework/repositories/product";
import { ProductDBInterface } from "../Application/Repositors/product";
import asyncHandler from "express-async-handler";
import { ProductInterface } from "./../types/common";
import { AddProduct, FindProduct, AddToCart, GetAllProduct } from "../Application/useCases/product";
import logging from "../Utils/logging";

const ProductController = (productDBRepository: ProductDBInterface, productDbRepositoryImpl: ProductRepositoryMongoDB) => {
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

    const CheckingFileUpload = asyncHandler(async (req: Request, res: Response) => {});

    const GetAllProductController = asyncHandler(async (req: Request, res: Response) => {
        const response = await GetAllProduct(ProductRepo);
        res.json({
            status: "success",
            message: "found product",
            response,
        });
    });

    const AddToCartController = asyncHandler(async (req: Request, res: Response) => {
        const productId = req.params.toString();
        const response = await AddToCart(productId, ProductRepo);
        res.json({ status: "success", message: "found product", response });
    });

    return {
        addProductController,
        ProductFindController,
        AddToCartController,
        GetAllProductController,
        CheckingFileUpload,
    };
};
export default ProductController;
