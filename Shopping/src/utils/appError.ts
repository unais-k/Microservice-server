import { HttpStatus } from "../types/httpStatusCode";

class AppError extends Error {
    statusCode: number;
    status: string;

    constructor(message: string, statusCode: HttpStatus) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
        this.message = message;
        Error.captureStackTrace(this);
    }
}

export default AppError;
