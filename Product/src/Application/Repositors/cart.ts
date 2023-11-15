// import { ProductRepositoryMongoDB } from "../../../framework/repositories/product";
// import { ProductInterface } from "../../types/common";

import { CartServiceMS } from "../../../framework/repositories/cart";

// export const productDBRepository = (repository: ReturnType<ProductRepositoryMongoDB>) => {
//     const addProduct = async (product: ProductInterface) => {
//         return await repository.addProduct(product);
//     };

//     const findProduct = async (product: string) => {
//         return await repository.findProduct(product);
//     };

//     return { addProduct, findProduct };
// };

// export type ProductDBInterface = typeof productDBRepository;

export const cartServiceControl = (repository: ReturnType<CartServiceMS>) => {
    const addToCart = async (product: string) => {
        return await repository.addToCart(product);
    };

    return { addToCart };
};

export type CartInterfaceServices = typeof cartServiceControl;
