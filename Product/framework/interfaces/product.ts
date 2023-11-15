import { Document } from "mongoose";

export interface ProductDocument extends Document {
    name: string;
    description: string;
    images?: string[];
    banner: string;
    type: string;
    quantity: number;
    price: number;
    available: boolean;
}
