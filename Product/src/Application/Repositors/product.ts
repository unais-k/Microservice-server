import { ProductRepositoryMongoDB } from "../../../framework/repositories/product";
import { ProductInterface } from "../../types/common";

export const productDBRepository = (repository: ReturnType<ProductRepositoryMongoDB>) => {
    const addProduct = async (product: ProductInterface) => {
        return await repository.addProduct(product);
    };

    const findProduct = async (product: string) => {
        return await repository.findProduct(product);
    };

    const addToCart = async (product: string) => {
        return await repository.addToCart(product);
    };

    return { addProduct, findProduct, addToCart };
};

export type ProductDBInterface = typeof productDBRepository;
