import { UserRepositoryMongoDB } from "../../framework/repositer/userDBrepo";
import { UserRegisterInterface } from "../../types/common";

export const userDbRepository = (repository: ReturnType<UserRepositoryMongoDB>) => {
    const getUserByEmail = async (email: string) => {
        return await repository.getUserByEmail(email);
    };

    const addUser = async (user: UserRegisterInterface) => {
        return await repository.addUser(user);
    };

    return {
        getUserByEmail,
        addUser,
    };
};

export type UserDBInterface = typeof userDbRepository;
