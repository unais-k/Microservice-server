import express from "express";
import { userDbRepository } from "../../../application/repositers/userDBrepo";
import { userRepositoryMongoDB } from "../../repositer/userDBrepo";
import userController from "../../../adapter/UserController/user";
import { clientVerifyToken } from "./../Middleware/auth";
const userRoute = () => {
    const router = express.Router();

    const controller = userController(userDbRepository, userRepositoryMongoDB);

    router.get("/user-data-fetch", clientVerifyToken, controller.userDataFetch);

    return router;
};
export default userRoute;
