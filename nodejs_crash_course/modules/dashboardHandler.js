function dashboardHandler(response) {
  response.statusCode = 201;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Welcome to dashboard')
}

module.exports = dashboardHandler;