import UserAddressDocument from "../../framework/interfaces/address";
import { UserAddressRepositoryMongoDB } from "./../../framework/repositer/userAddressDBrepo";

export const userAddressDBrepository = (repository: ReturnType<UserAddressRepositoryMongoDB>) => {
    const getAddress = async (addressId: string) => {
        return await repository.getAddress(addressId);
    };

    const createAddress = async (user: UserAddressDocument, userId: string) => {
        return await repository.createAddress(user, userId);
    };

    const getAllAddress = async (userId: string) => {
        return await repository.getAllAddress(userId);
    };
    const editAddress = async (address: UserAddressDocument) => {
        return await repository.editAddress(address);
    };

    return {
        getAddress,
        createAddress,
        getAllAddress,
        editAddress,
    };
};

export type UserAddressDBInterface = typeof userAddressDBrepository;
