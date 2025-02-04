const http = require('http');
const save = require('./modules/save');
const dashboardHandler = require('./modules/dashboardHandler');
const notFoundHandler = require('./modules/notFoundHandler');

const server = http.createServer((request, response) => {
  if(request.method === 'POST' && request.url === '/save') {
    save(request, response);
  } else if(request.method === 'GET' && request.url === '/dashboard') {
    dashboardHandler(response);
  } else {
    notFoundHandler(response);
  }
})

const PORT = 8083;

server.listen(PORT, () => {
  console.log('running on port ', PORT)
})