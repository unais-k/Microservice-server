import express from "express";
import authController from "./../../../adapter/UserController/auth";
import { userDbRepository } from "../../../application/repositers/userDBrepo";
import { userRepositoryMongoDB } from "../../repositer/userDBrepo";
import { authServiceInterface } from "../../../application/Services/AuthInterfaces";
import { authService } from "../Service/authService";
const AuthRoute = () => {
    const router = express.Router();

    const controller = authController(userDbRepository, userRepositoryMongoDB, authServiceInterface, authService);

    router.post("/user-register-api", controller.registerUser);
    router.post("/user-login-api", controller.loginUser);
    router.get("/user-data-fetch", controller.userDataFetch);

    return router;
};
export default AuthRoute;
