const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const dotenv = require("dotenv").config();

const dbConnect = require("./config/dbConnect");
const { errorHandler, notFound } = require("./middlewares/errorHandler");

const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const blogRoute = require("./routes/blogRoute");
const blogCategory = require("./routes/blogCategory");
const productCategory = require("./routes/productCategory");
const colorRoute = require("./routes/colorRoute");
const couponRoute = require("./routes/couponRoute");
const brandRoute = require("./routes/brandRoute");
const enqRoute = require("./routes/enqRoute");
const uploadRoute = require("./routes/uploadRoute");

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
app.use("/api/blog", blogRoute);
app.use("/api/category", blogCategory);
app.use("/api/pcategory", productCategory);
app.use("/api/brand", brandRoute);
app.use("/api/coupon", couponRoute);
app.use("/api/color", colorRoute);
app.use("/api/enquiry", enqRoute);
app.use("/api/upload", uploadRoute);

app.use(notFound);
app.use(errorHandler);
