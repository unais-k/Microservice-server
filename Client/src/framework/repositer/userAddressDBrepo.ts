import UserAddressDocument from "../interfaces/address";
import Address from "./../Model/Address";

export const userAddressRepoMongoDB = () => {
    const getAllAddress = async (userId: string) => {
        const address = await Address.find({ userId: userId });
        return address;
    };
    const createAddress = async (address: UserAddressDocument) => {
        return await Address.create(address);
    };
    const getAddress = async (addressId: string) => {
        const address = await Address.findOne({ _id: addressId });
        return address;
    };
    return { getAllAddress, createAddress, getAddress };
};

export type UserAddressRepositoryMongoDB = typeof userAddressRepoMongoDB;
