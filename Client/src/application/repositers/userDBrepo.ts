import { UserRepositoryMongoDB } from "../../framework/repositer/userDBrepo";
import { UserRegisterInterface } from "../../types/common";

export const userDbRepository = (repository: ReturnType<UserRepositoryMongoDB>) => {
    const getUserByEmail = async (email: string) => {
        return await repository.getUserByEmail(email);
    };

    const addUser = async (user: UserRegisterInterface) => {
        return await repository.addUser(user);
    };

    const userDetails = async (userId: string) => {
        return await repository.userDetails(userId);
    };

    return {
        getUserByEmail,
        addUser,
        userDetails,
    };
};

export type UserDBInterface = typeof userDbRepository;
