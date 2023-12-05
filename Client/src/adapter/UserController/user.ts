import { Request, Response } from "express";
import { UserDBInterface } from "../../application/repositers/userDBrepo";
import { UserRepositoryMongoDB } from "../../framework/repositer/userDBrepo";
import asyncHandler from "express-async-handler";
import { SubscribeEventsController, userDataFetchAPI } from "./../../application/useCase/userAuth";

const userController = (userDbRepository: UserDBInterface, userDbRepositoryImpl: UserRepositoryMongoDB) => {
    const dbRepositoryUser = userDbRepository(userDbRepositoryImpl());

    const userDataFetch = asyncHandler(async (req: Request, res: Response) => {
        const userId = req.body.user.payload.Id;

        const response = await userDataFetchAPI(userId, dbRepositoryUser);
        res.json({
            status: "success",
            message: "user data fetched",
            response,
        });
    });

    const SubscribeEvents = asyncHandler(async (req: Request, res: Response) => {
        const userId = req.body.user.payload.Id;
        const payload = req.body;

        const response = await SubscribeEventsController(userId, payload);
    });

    return { userDataFetch, SubscribeEvents };
};

export default userController;
