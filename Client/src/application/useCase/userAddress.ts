import UserAddressDocument from "../../framework/interfaces/address";
import { UserAddressDBInterface } from "../repositers/userAddressDBrepo";

export const addressRegister = async (
    address: UserAddressDocument,
    userId: string,
    addressRepository: ReturnType<UserAddressDBInterface>
) => {
    address.user = userId;
    const response = await addressRepository.createAddress(address, userId);
    return response;
};

export const editUserAddress = async (
    address: UserAddressDocument,
    user: string,
    addressRepo: ReturnType<UserAddressDBInterface>
) => {
    address.user = user;
    const response = await addressRepo.editAddress(address);
    return response;
};

export const getUserAddress = async (userId: string, addressRepo: ReturnType<UserAddressDBInterface>) => {
    const response = await addressRepo.getAddress(userId);
    return response;
};
