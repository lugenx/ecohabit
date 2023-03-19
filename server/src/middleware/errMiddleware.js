export function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`Not Found - ${req.originalUrl}`);
  next(error);
}

export function errorHandler(err, req, res, next) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    error: err.message || "Internal server error!",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
}
