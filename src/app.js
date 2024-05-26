const express = require("express");
const cors = require("cors");
const httpStatus = require("http-status");
const { applicationRoutes } = require("./app/routes");
const notFoundHandler = require("./app/middlewares/notFoundHandler");
const globalErrorHandler = require("./app/middlewares/globalErrorHandler");

// backend application
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.get("/", (req, res) => {
  res.status(httpStatus.OK).json({
    message: "Welcome to AutoNex server",
  });
});

app.use("/api/v1", applicationRoutes);

// not found route handler
app.use(notFoundHandler);

// global error handler
app.use(globalErrorHandler);

module.exports = app;
