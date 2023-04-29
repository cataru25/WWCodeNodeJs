// the req parameter is not required so _ is used to avoid warnings related to code snippets that have not been called or used
exports.errorHandler = (err, _, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500
  // The HTTP 404 Not Found response status code indicates that
  // the server cannot find the requested resource.
  res.status(500).send(`error { error: ${err?.message} }`);
};

exports.notFoundHandler = (req, res, _) => {
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404
  // The HTTP 404 Not Found response status code indicates that
  // the server cannot find the requested resource.
  res.status(404).send(`Page ${req.path} does not exist in this server`);
};
