import mongoose from "mongoose";
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
    const userDetails = async (userId: string) => {
        const id = new mongoose.Types.ObjectId(userId);
        return await User.findOne({ _id: id });
    };

    return { getUserByEmail, addUser, userDetails };
};

export type UserRepositoryMongoDB = typeof userRepositoryMongoDB;
