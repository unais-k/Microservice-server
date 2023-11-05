import { Document, Schema } from "mongoose";

interface Address {
    type: Schema.Types.ObjectId;
    ref: "address";
    require: true;
}

interface Product {
    _id: string;
    name: string;
    banner: string;
    price: number;
}

interface CartItem {
    product: Product;
    unit: number;
}

interface WishlistItem {
    _id: string;
    name: string;
    description: string;
    banner: string;
    available: boolean;
    price: number;
}

interface Order {
    _id: string;
    amount: string;
    date: string;
}

export default interface UserDocument extends Document {
    fullName: string;
    email: string;
    password: string;
    salt: string;
    phone: string;
    address: Address[];
    cart: CartItem[];
    wishlist: WishlistItem[];
    orders: Order[];
}
