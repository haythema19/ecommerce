const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const dotenv = require("dotenv").config();

const dbConnect = require("./config/dbConnect");
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const { errorHandler, notFound } = require("./middlewares/errorHandler");

const PORT = process.env.PORT || 5000;
const app = express();

dbConnect();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`Serving on port ${PORT}`);
});

app.use("/api/users", authRoute);
app.use("/api/product", productRoute);

app.use(notFound);
app.use(errorHandler);
