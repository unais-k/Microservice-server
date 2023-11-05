import { Document } from "mongoose";

export default interface UserAddressDocument extends Document {
    street: string;
    postalCode: string;
    city: string;
    country: string;
    user?: string;
}
