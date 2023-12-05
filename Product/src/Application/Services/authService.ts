import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
import configENV from "../../Utils/config";

export const authService = () => {
    const generateToken = (payload: JwtPayload) => {
        const token = jwt.sign({ payload }, configENV.JWT_KEY, {
            expiresIn: "5d",
        });
        return token;
    };

    const verifyToken = (token: string) => {
        return jwt.verify(token, configENV.JWT_KEY);
    };

    return {
        generateToken,
        verifyToken,
    };
};

export type AuthService = typeof authService;

export type AuthServiceReturn = ReturnType<AuthService>;
