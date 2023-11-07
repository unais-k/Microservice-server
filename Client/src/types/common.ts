import { Request } from "express";

export interface JwtPayload {
    Id?: string | any;
    email?: string | any;
    fullName?: string | any;
    role: string | any;
}

export interface UserInterface {
    _id?: string | any;
    fullName?: string | any;
    email?: string | any;
    password?: string | any;
}

export interface UserRegisterInterface {
    fullName: string | any;
    email: string | any;
    password: string | any;
}
