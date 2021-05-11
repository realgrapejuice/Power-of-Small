import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import sessionRouter from "./routers/sessionRouter";

const PORT = 5000;

// create Express App
const app = express();
const logger = morgan("dev");

const handleListening = () => {
  console.log(`✔ Server is listening on http://localhost:${PORT}`);
};

app.use(logger);
app.use("/", globalRouter);
app.use("/session", sessionRouter);
app.use("/users", userRouter);

app.listen(PORT, handleListening);
