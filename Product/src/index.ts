import express, { Application, Request, Response, NextFunction } from "express";
import http from "http";
import AppError from "./Utils/appError";
import { createChannel } from "./Utils/Channel";
import expressConfig from "./framework/server/index";
import routes from "./framework/server/Router/router";
import connectDB from "./framework/Database/server";
import serverConfig from "./framework/server/server";
const app: Application = express();
const server = http.createServer(app);
expressConfig(app);
routes(app);
createChannel();

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
