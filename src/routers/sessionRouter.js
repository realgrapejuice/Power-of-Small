import express from "express";
import {
  addSession,
  mainConsole,
  edit,
} from "../controllers/sessionController";

const sessionRouter = express.Router();

sessionRouter.get("/:id(\\d+)", mainConsole);
sessionRouter.get("/:id(\\d+)/edit", edit);
sessionRouter.get("/:id(\\d+)/add", addSession);

export default sessionRouter;
