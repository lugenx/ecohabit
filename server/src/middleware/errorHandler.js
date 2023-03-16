function errorHandler(err, req, res, next) {
  res.status(500).json({ message: "Internal server error", data: err.stack });
}

export { errorHandler };
