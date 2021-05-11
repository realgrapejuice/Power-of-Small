import express from "express";
import { welcome } from "../controllers/sessionController";
import { join, login } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", welcome);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
