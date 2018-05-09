function generateNotFoundError(req, res, next) {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
}

function logError(error, req, res, next) {
  console.log(error);
  next(error);
}

function sendError(error, req, res, next) {
  res.status(error.status || 500);
  res.json({
    error: error.message
  });
}

module.exports.generateNotFoundError = generateNotFoundError;
module.exports.logError = logError;
module.exports.sendError = sendError;