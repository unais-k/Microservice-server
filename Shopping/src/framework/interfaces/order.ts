import { Document } from "mongoose";

interface Product {
    _id: string;
    name: string;
    desc: string;
    banner: string;
    type: string;
    unit: number;
    price: number;
    supplier: string;
}

interface Item {
    product: Product;
    unit: number;
}

interface ItemsArray {
    items: Item[];
}

export default interface OrderDocument extends Document {
    orderId: string;
    customerId: string;
    amount: number;
    status: string;
    items: ItemsArray;
}
