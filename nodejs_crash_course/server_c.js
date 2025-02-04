// handling query parameters

const http = require('http')
const url = require('url')

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  const parsedUrl = url.parse(request.url, true); // parsed the request url
  const pathname = parsedUrl.pathname
  const query = parsedUrl.query

  if(pathname === '/') {
    response.end(`Welcome to home page. Your query are: ${query.H}, ${query.value}, ${query.v}`)
  } else if(pathname == '/about') {
    response.end(`Abaout page. Your query are: ${query.H}, ${query.value}, ${query.v}`)
  } else {
    response.statusCode = 404;
    response.end('Page not found!');
  }
})

const PORT = 8082;
server.listen(PORT, () => {
  console.log('Running on port: 8082')
})