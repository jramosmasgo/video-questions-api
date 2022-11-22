import express, { Application } from "express";
import Routes from "@routes/index.routes";
import ErrorMiddleware from "@middlewares/error.middleware";

const app: Application = express();

app.set("port", process.env.PORT || 4001);

app.use(Routes);

app.use(ErrorMiddleware);

export default app;
