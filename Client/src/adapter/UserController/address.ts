import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import UserAddressDocument from "../../framework/interfaces/address";
import { addressRegister } from "../../application/useCase/userAddress";
import { UserAddressDBInterface } from "./../../application/repositers/userAddressDBrepo";
import { UserAddressRepositoryMongoDB } from "../../framework/repositer/userAddressDBrepo";

const addressController = (
    userAddressDBrepository: UserAddressDBInterface,
    userAddressDbRepositoryImpl: UserAddressRepositoryMongoDB
) => {
    const dbRepositoryAddress = userAddressDBrepository(userAddressDbRepositoryImpl());

    const registerAddress = asyncHandler(async (req: Request, res: Response) => {
        const address: UserAddressDocument = req.body;
        const userId = "6547a6fa01cb633521eb184e";
        const response = await addressRegister(address, userId, dbRepositoryAddress);
        if (response) {
            res.json({ message: "adding address done", ok: true, response });
        } else {
            res.json({ error: "adding address failed" });
        }
    });

    return { registerAddress };
};

export default addressController;
