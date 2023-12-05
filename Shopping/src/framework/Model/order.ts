import mongoose, { Schema } from "mongoose";
import OrderDocument from "../interfaces/order";

const OrderSchema: Schema = new Schema<OrderDocument>(
    {
        orderId: { type: String },
        customerId: { type: String },
        amount: { type: Number },
        status: { type: String },
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
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model<OrderDocument>("Order", OrderSchema);
export default Order;
