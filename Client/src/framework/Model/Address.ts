import mongoose, { Schema } from "mongoose";
import UserAddressDocument from "../interfaces/address";

const AddressSchema: Schema = new Schema<UserAddressDocument>(
    {
        street: String,
        postalCode: String,
        city: String,
        country: String,
        user: String,
    },
    { timestamps: true }
);

// Create a Mongoose model for the Address document
const Address = mongoose.model<UserAddressDocument>("Address", AddressSchema);
export default Address;
