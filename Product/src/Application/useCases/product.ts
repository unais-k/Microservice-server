import { ProductInterface } from "../../types/common";
import { ProductDBInterface } from "../Repositors/product";

export const GetProductPayload = async (
    userId: string,
    productId: string,
    qty: string,
    productRepo: ReturnType<ProductDBInterface>,
    event: string
) => {
    const response = await productRepo.findProduct(productId);
    const payload = {
        event: event,
        data: { userId, response, qty },
    };
    return payload;
};

export const AddProduct = async (product: ProductInterface, productRepo: ReturnType<ProductDBInterface>) => {
    const response = await productRepo.addProduct(product);
    return response;
};

export const FindProduct = async (productId: string, productRepo: ReturnType<ProductDBInterface>) => {
    const response = await productRepo.findProduct(productId);
    return response;
};

export const GetAllProduct = async (productRepo: ReturnType<ProductDBInterface>) => {
    const response = await productRepo.getAllProduct();
    return response;
};

export const AddToCart = async (productId: string, productRepo: ReturnType<ProductDBInterface>) => {
    const response = await productRepo.addToCart(productId);
    return response;
};
