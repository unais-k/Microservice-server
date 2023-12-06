import express from "express";
import ProductController from "../../../src/Adapter/productController";
import { productDBRepository } from "./../../../src/Application/Repositors/product";
import { productRepositoryMongoDB } from "../../repositories/product";
import { createChannel } from "../../../src/Utils/Channel";

const ProductRoute = () => {
    const router = express.Router();
    const channel = createChannel();

    const controller = ProductController(productDBRepository, productRepositoryMongoDB, channel);

    router.post("/add-product-api", controller.addProductController);
    router.get("/get-all-products", controller.GetAllProductController);
    router.get("/get-product-by-category", controller.ProductFindController);

    return router;
};
export default ProductRoute;
