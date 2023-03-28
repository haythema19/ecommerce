const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const dbConnect = require("./config/dbConnect");
const authRoute = require("./routes/authRoute");
const { errorHandler, notFound } = require("./middlewares/errorHandler");

const PORT = process.env.PORT || 5000;
const app = express();

dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`Serving on port ${PORT}`);
});

app.use("/api/users", authRoute);

app.use(notFound);
app.use(errorHandler);
