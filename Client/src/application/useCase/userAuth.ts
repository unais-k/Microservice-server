import { UserInterface, UserRegisterInterface } from "../../types/common";
import { HttpStatus } from "../../types/httpStatusCode";
import { AuthServiceInterface } from "../Services/AuthInterfaces";
import { UserDBInterface } from "../repositers/userDBrepo";
import AppError from "./../../Utils/appError";

export const userRegister = async (
    user: UserRegisterInterface,
    userRepository: ReturnType<UserDBInterface>,
    authService: ReturnType<AuthServiceInterface>
) => {
    user.email = user.email.toLowerCase();
    const isEmailExist = await userRepository.getUserByEmail(user.email);

    if (isEmailExist) {
        throw new AppError("existing user", HttpStatus.UNAUTHORIZED);
    }

    user.password = await authService.hashPassword(user.password);
    const { _id: Id, email, fullName } = await userRepository.addUser(user);

    const token = authService.generateToken({
        Id: Id.toString(),
        email,
        fullName,
        role: "user",
    });
    return token;
};

export const userLogin = async (
    email: string,
    password: string,
    userRepository: ReturnType<UserDBInterface>,
    authService: ReturnType<AuthServiceInterface>
) => {
    const user: UserInterface | null = await userRepository.getUserByEmail(email);
    if (!user) {
        throw new AppError("this user doesn't exist", HttpStatus.BAD_REQUEST);
    }

    const isPasswordMatch = await authService.comparePassword(password, user.password);
    if (!isPasswordMatch) {
        throw new AppError("password is incorrect", HttpStatus.UNAUTHORIZED);
    }
    const token = authService.generateToken({
        Id: user?._id.toString(),
        email: user?.email,
        fullName: user?.fullName,
        role: "user",
    });
    const userData = {
        _id: user?._id,
        fullName: user?.fullName,
        email: user?.email,
        token: token,
    };
    return { userData };
};

export const userDataFetchAPI = async (userId: string, userRepository: ReturnType<UserDBInterface>) => {
    const response = await userRepository.userDetails(userId);
    return response;
};

export const SubscribeEventsController = async (userId: string, payload: any) => {};
