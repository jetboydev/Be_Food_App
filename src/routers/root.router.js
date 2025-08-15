import express from "express";
import routerAPI from ".";

const rootRouter = express.Router();

rootRouter.use("/food-app", routerAPI);

export default rootRouter;
