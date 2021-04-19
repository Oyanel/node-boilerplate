import { NextFunction, Request, Response } from "express";
import { verify, JsonWebTokenError } from "jsonwebtoken";
import { HttpError } from "../error/HttpError";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    const error = new HttpError(401, "Unauthorized");
    if (!token) {
        res.status(401).json({ error });
    }

    try {
        verify(token, process.env.APP_TOKEN);
        next();
    } catch (e) {
        if (e instanceof JsonWebTokenError) {
            res.status(401).json({ error });
        }
        error.status = 400;
        res.status(400).json({ error });
    }
};
