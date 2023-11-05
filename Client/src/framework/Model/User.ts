import mongoose, { Schema } from "mongoose";
import UserDocument from "./../interfaces/user";

const UserSchema: Schema = new Schema(
    {
        fullName: { type: String },
        email: { type: String },
        password: { type: String },
        address: [
            {
                type: Schema.Types.ObjectId,
                ref: "Address",
                required: true,
            },
        ],
        cart: [
            {
                product: {
                    _id: { type: String, required: true },
                    name: { type: String },
                    banner: { type: String },
                    price: { type: Number },
                },
                unit: { type: Number, required: true },
            },
        ],
        wishlist: [
            {
                _id: { type: String, required: true },
                name: { type: String },
                description: { type: String },
                banner: { type: String },
                available: { type: Boolean },
                price: { type: Number },
            },
        ],
        orders: [
            {
                _id: { type: String, required: true },
                amount: { type: String },
                date: { type: Date, default: Date.now },
            },
        ],
    },
    {
        toJSON: {
            transform(doc, ret) {
                delete ret.password;
                delete ret.salt;
                delete ret.__v;
            },
        },
        timestamps: true,
    }
);

const User = mongoose.model<UserDocument>("User", UserSchema);
export default User;
