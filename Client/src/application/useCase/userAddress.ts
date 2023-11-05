import UserAddressDocument from "../../framework/interfaces/address";
import { UserAddressDBInterface } from "../repositers/userAddressDBrepo";

export const addressRegister = async (
    address: UserAddressDocument,
    userId: string,
    addressRepository: ReturnType<UserAddressDBInterface>
) => {
    address.user = userId;
    const response = await addressRepository.createAddress(address);
    return response;
};
