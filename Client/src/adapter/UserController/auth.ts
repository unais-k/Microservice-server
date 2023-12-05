import { Request, Response } from "express";
import { UserDBInterface } from "../../application/repositers/userDBrepo";
import { AuthService } from "../../framework/Server/Service/authService";
import { UserRepositoryMongoDB } from "../../framework/repositer/userDBrepo";
import { AuthServiceInterface } from "./../../application/Services/AuthInterfaces";
import asyncHandler from "express-async-handler";
import { userDataFetchAPI, userLogin, userRegister } from "./../../application/useCase/userAuth";
import { UserRegisterInterface } from "../../types/common";
import logging from "../../Utils/logging";

const authController = (
    userDbRepository: UserDBInterface,
    userDbRepositoryImpl: UserRepositoryMongoDB,
    authServiceInterface: AuthServiceInterface,
    authServiceImpl: AuthService
) => {
    const dbRepositoryUser = userDbRepository(userDbRepositoryImpl());
    const authService = authServiceInterface(authServiceImpl());

    const loginUser = asyncHandler(async (req: Request, res: Response) => {
        const { email, password }: { email: string; password: string } = req.body;
        logging.info(req.body);
        const { userData } = await userLogin(email, password, dbRepositoryUser, authService);
        res.json({
            status: "success",
            message: "user verified",
            userData,
        });
    });

    const registerUser = asyncHandler(async (req: Request, res: Response) => {
        const user: UserRegisterInterface = req.body;
        const token = await userRegister(user, dbRepositoryUser, authService);
        res.json({
            status: "success",
            message: "new user registered",
            token,
        });
    });

    const userDataFetch = asyncHandler(async (req: Request, res: Response) => {
        const userId = req.body.user;
        const response = await userDataFetchAPI(userId, dbRepositoryUser);
        res.json({
            status: "success",
            message: "user data fetched",
            response,
        });
    });

    return { loginUser, registerUser, userDataFetch };
};

export default authController;
