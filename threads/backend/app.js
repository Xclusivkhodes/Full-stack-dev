const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("@exortek/express-mongo-sanitize");
const AppError = require("./utils/appError.js");
const globalErrorHandler = require("./controller/errorController.js");
const userRouter = require("./routes/userRoutes.js");

const path = require("node:path");

const app = express();

app.use("/", express.static("uploads"));

app.use(cookieParser());

app.use(helmet());

app.use(
  cors({
    origin: ["https://localhost:3000"],
    credentials: true,
  }),
);

app.use(express.static(path.join(__dirname, "public")));

process.env.NODE_ENV === "development" ? app.use(morgan("dev")) : null;

app.use(express.json({ limit: "10kb" }));

app.use(mongoSanitize());

//Routes for users
app.use("/api/v1/users", userRouter);

//Routes for posts

app.all(/.*/, (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
