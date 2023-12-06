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

    const getAllProduct = async () => {
        return await Product.find();
    };

    const addToCart = async (product: string) => {
        // find the product and send it to both client and shopping with appropriate message to do actions
        console.log(product);
    };

    const addToWishlist = async (product: string) => {
        const id = findProduct(product);

        //  channel to client the object and add a message to add to wishlist
        return await Product.findOne({ _id: id });
    };
    return { addProduct, findProduct, addToCart, getAllProduct, addToWishlist };
};
export type ProductRepositoryMongoDB = typeof productRepositoryMongoDB;
