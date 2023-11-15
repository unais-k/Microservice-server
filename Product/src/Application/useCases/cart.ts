import { CartInterfaceServices } from "../Repositors/cart";

export const AddToCart = async (productId: string, cartService: ReturnType<CartInterfaceServices>) => {
    const response = await cartService.addToCart(productId);
    return response;
};
