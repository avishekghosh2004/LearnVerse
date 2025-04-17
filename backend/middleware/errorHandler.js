const errorHandler = (err, req, res, next) => {
  console.error("Error details:", err);

  // MongoDB duplicate key error
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Email already exists",
    });
  }

  // Validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: Object.values(err.errors)
        .map((val) => val.message)
        .join(", "),
    });
  }

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message || "Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export default errorHandler;
