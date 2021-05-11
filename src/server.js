import express from "express";

const PORT = 5000;

// create Express App
const app = express();

const handleListening = () => {
  console.log(`✔ Server is listening on http://localhost:${PORT}`);
};

const home = (req, res) => {
  return res.send("Home");
};

app.get("/", home);

app.listen(PORT, handleListening);
