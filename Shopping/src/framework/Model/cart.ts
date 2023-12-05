import mongoose, { Schema } from "mongoose";
import CartDocument from "../interfaces/cart";

const CartSchema: Schema = new Schema<CartDocument>({
    customerId: { type: String },
    items: [
        {
            product: {
                _id: { type: String, require: true },
                name: { type: String },
                desc: { type: String },
                banner: { type: String },
                type: { type: String },
                unit: { type: Number },
                price: { type: Number },
                supplier: { type: String },
            },
            unit: { type: Number, require: true },
        },
    ],
});

const Cart = mongoose.model<CartDocument>("Cart", CartSchema);
export default Cart;
