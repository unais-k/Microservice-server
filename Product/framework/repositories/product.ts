import Product from "./../Model/product";
import { ProductInterface } from "./../../src/types/common";
import mongoose from "mongoose";

export const productRepositoryMongoDB = () => {
    const addProduct = async (product: ProductInterface) => {
        return await Product.create(product);
    };

    const findProduct = async (productId: string) => {
        const id = new mongoose.Types.ObjectId(productId);
        console.log(id);
        return await Product.findOne({ _id: id });
    };

    const addToCart = async (product: string) => {
        console.log(product);
    };
    return { addProduct, findProduct, addToCart };
};
export type ProductRepositoryMongoDB = typeof productRepositoryMongoDB;
