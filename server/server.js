// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/register");
const dotenv = require("dotenv");
const { loginRouter } = require("./routes/login");
const saveBookmarks = require("./routes/saveBookmarks");
const getBookmarks = require("./routes/getBookmarks");

//Define express,express.json and cors/ all are needed for development
const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/server", router);
app.use("/server", loginRouter);
app.use("/server", saveBookmarks);
app.use("/server", getBookmarks);
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
