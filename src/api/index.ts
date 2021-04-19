import { Application, Router } from "express";
import { test, test2 } from "./test";
import { HttpError, verifyToken } from "../utils";

export const routes = (app: Application) => {
    const publicRouter = Router();
    const privateRouter = Router();

    //public routes
    publicRouter.get("/test", test);
    publicRouter.get("/test2", test2);

    //private routes
    privateRouter.get("/user", test);

    app.use("/api/v1", publicRouter);
    app.use("/api/v1/private/auth", verifyToken, privateRouter);

    // Send Not Found error if no route is found.
    app.use((req, res) => {
        const error = new HttpError(404, "Not Found");
        res.status(404).json({ error });
    });
};
