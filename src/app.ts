import "dotenv/config";
import express from "express";
import loaders from "./loaders";
import { routes } from "./api";

async function startServer() {
    const app = express();

    await loaders(app);

    routes(app);

    app.listen(process.env.PORT, () => {
        console.log(`Your server is ready on port : ${process.env.PORT} !`);
    });
}

startServer();
