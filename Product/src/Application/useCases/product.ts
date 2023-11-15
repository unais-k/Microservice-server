import { ProductInterface } from "../../types/common";
import { ProductDBInterface } from "../Repositors/product";

export const AddProduct = async (product: ProductInterface, productRepo: ReturnType<ProductDBInterface>) => {
    const response = await productRepo.addProduct(product);
    return response;
};

export const FindProduct = async (productId: string, productRepo: ReturnType<ProductDBInterface>) => {
    const response = await productRepo.findProduct(productId);
    return response;
};

export const AddToCart = async (productId: string, productRepo: ReturnType<ProductDBInterface>) => {
    const response = await productRepo.addToCart(productId);
    return response;
};
