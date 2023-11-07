import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import UserAddressDocument from "../../framework/interfaces/address";
import { addressRegister, editUserAddress, getUserAddress } from "../../application/useCase/userAddress";
import { UserAddressDBInterface } from "./../../application/repositers/userAddressDBrepo";
import { UserAddressRepositoryMongoDB } from "../../framework/repositer/userAddressDBrepo";

const addressController = (
    userAddressDBrepository: UserAddressDBInterface,
    userAddressDbRepositoryImpl: UserAddressRepositoryMongoDB
) => {
    const dbRepositoryAddress = userAddressDBrepository(userAddressDbRepositoryImpl());

    const registerAddress = asyncHandler(async (req: Request, res: Response) => {
        const address: UserAddressDocument = req.body;
        const userId = "654a339ded7a03f687fa2972";
        const response = await addressRegister(address, userId, dbRepositoryAddress);
        if (response) {
            res.json({ message: "adding address done", ok: true, response });
        } else {
            res.json({ error: "adding address failed" });
        }
    });

    const editAddress = asyncHandler(async (req: Request, res: Response) => {
        const body = req.body;
        const usersId = req.body.user;
        const response = await editUserAddress(body, usersId, dbRepositoryAddress);
        if (response) {
            res.json({ message: "edited address", ok: true, response });
        } else {
            res.json({ error: "editing address failed" });
        }
    });

    const getAddress = asyncHandler(async (req: Request, res: Response) => {
        const userId = req.body.user;
        const addressId = req.params;
        const response = await getUserAddress(userId, dbRepositoryAddress);
        if (response) res.json({ message: "get address", ok: true, response });
        else res.json({ error: "address didn't get" });
    });

    return { registerAddress, editAddress, getAddress };
};

export default addressController;
