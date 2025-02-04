function notFoundHandler(response) {
  response.statusCode = 404;
  response.end('Page not found');
}

module.exports = notFoundHandler;