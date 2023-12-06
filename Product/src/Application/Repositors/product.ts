import { ProductRepositoryMongoDB } from "../../../framework/repositories/product";
import { ProductInterface } from "../../types/common";

export const productDBRepository = (repository: ReturnType<ProductRepositoryMongoDB>) => {
    const addProduct = async (product: ProductInterface) => {
        return await repository.addProduct(product);
    };

    const findProduct = async (product: string) => {
        return await repository.findProduct(product);
    };

    const getAllProduct = async () => {
        return await repository.getAllProduct();
    };

    const addToCart = async (product: string) => {
        return await repository.addToCart(product);
    };

    const addToWishlist = async (product: string) => {};

    return { addProduct, findProduct, addToCart, getAllProduct };
};

export type ProductDBInterface = typeof productDBRepository;
