import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { authService } from "../Service/authService";
// import { CustomRequest } from "../../../types/common";

export const clientVerifyToken = async (req: Request, res: Response, next: NextFunction) => {
    let token = req.header("Authorization");
    try {
        if (!token) return res.status(404).json({ message: "Authentication failed: no token provided." });

        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length);
        }

        const verified = authService().verifyToken(token);

        req.body.user = verified;
        next();
    } catch (error) {
        console.error(error);
        return res.status(404).json({ message: "Authentication failed: invalid token." });
    }
};

export const generateToken = (data: any) => {
    const token = jwt.sign(data, "jwtSecure");
    return token;
};
