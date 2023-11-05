import { UserRegisterInterface } from "../../types/common";
import User from "../Model/User";

export const userRepositoryMongoDB = () => {
    const getUserByEmail = async (email: string) => {
        const user = await User.findOne({ email: email });
        return user;
    };
    const addUser = async (user: UserRegisterInterface) => {
        return await User.create(user);
    };
    return { getUserByEmail, addUser };
};

export type UserRepositoryMongoDB = typeof userRepositoryMongoDB;
