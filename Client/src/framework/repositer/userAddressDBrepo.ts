import mongoose from "mongoose";
import User from "../Model/User";
import UserAddressDocument from "../interfaces/address";
import Address from "./../Model/Address";

export const userAddressRepoMongoDB = () => {
    const getAllAddress = async (userId: string) => {
        const address = await Address.find({ userId: userId });
        return address;
    };
    const createAddress = async (address: UserAddressDocument, userId: string) => {
        const newAddress = await Address.create(address);
        const id = new mongoose.Types.ObjectId(userId);
        const user = await User.findById(id);
        user?.address?.push(newAddress?._id);
        user?.save();
        return newAddress;
    };
    const getAddress = async (addressId: string) => {
        const address = await Address.findOne({ _id: addressId });
        return address;
    };
    const editAddress = async (address: UserAddressDocument) => {
        const id = address.id;
        const edit = await Address.findOneAndUpdate(
            { id: id },
            {
                $set: {
                    street: address.street,
                    postalCode: address.postalCode,
                    city: address.city,
                    country: address.country,
                },
            }
        );
        return { msg: "address edited" };
    };
    return { getAllAddress, createAddress, getAddress, editAddress };
};

export type UserAddressRepositoryMongoDB = typeof userAddressRepoMongoDB;
