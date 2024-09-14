const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

mongoose
  .connect("mongodb+srv://tncnp27402:tncnp21022543@cluster0.zcaik.mongodb.net/")
  .then(() => console.log("connected to db"))

  .catch((error) => console.log(error));
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    Credential: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
