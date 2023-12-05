import express from "express";
import ProductController from "../../../src/Adapter/productController";
import { productDBRepository } from "./../../../src/Application/Repositors/product";
import { productRepositoryMongoDB } from "../../repositories/product";

const ProductRoute = () => {
    const router = express.Router();

    const controller = ProductController(productDBRepository, productRepositoryMongoDB);

    router.post("/add-product-api", controller.addProductController);
    router.post("/file-upload");
    router.get("/get-all-products", controller.GetAllProductController);
    router.get("/get-product-by-category", controller.ProductFindController);

    return router;
};
export default ProductRoute;
