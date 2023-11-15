import mongoose, { Schema } from "mongoose";
import { ProductDocument } from "../interfaces/product";

const ProductSchema: Schema<ProductDocument> = new Schema<ProductDocument>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    banner: { type: String, required: true },
    images: [{ type: String }],
    type: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    available: { type: Boolean, required: true },
});

const Product = mongoose.model<ProductDocument>("Product", ProductSchema);
export default Product;
