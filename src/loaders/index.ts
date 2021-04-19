import expressLoader from "./express";
import { Application } from "express";
import { mongooseInit } from "./mongoose";

export default async (expressApp: Application) => {
    mongooseInit();
    console.log("MongoDB Intialized");
    await expressLoader(expressApp);
    console.log("Express Intialized");
};
