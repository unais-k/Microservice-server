import express, { Application, Request, Response, NextFunction } from "express";
import http from "http";
import AppError from "./utils/appError";
import serverConfig from "./framework/server/server";
import connectDB from "./framework/database";
import expressConfig from "./framework/server";
import routes from "./framework/server/router/router";
const app: Application = express();
const server = http.createServer(app);
expressConfig(app);
routes(app);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        // Handle the AppError instance
        res.status(err.statusCode).json({ error: err.message });
    } else {
        // Handle other errors (non-AppError instances)
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.all("*", (req, res, next: NextFunction) => {
    next(new AppError("Not found", 404));
});

connectDB();
serverConfig(server);
