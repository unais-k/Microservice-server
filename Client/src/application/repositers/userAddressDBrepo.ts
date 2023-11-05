import UserAddressDocument from "../../framework/interfaces/address";
import { UserAddressRepositoryMongoDB } from "./../../framework/repositer/userAddressDBrepo";

export const userAddressDBrepository = (repository: ReturnType<UserAddressRepositoryMongoDB>) => {
    const getAddress = async (addressId: string) => {
        return await repository.getAddress(addressId);
    };

    const createAddress = async (user: UserAddressDocument) => {
        return await repository.createAddress(user);
    };

    const getAllAddress = async (userId: string) => {
        return await repository.getAllAddress(userId);
    };

    return {
        getAddress,
        createAddress,
        getAllAddress,
    };
};

export type UserAddressDBInterface = typeof userAddressDBrepository;
