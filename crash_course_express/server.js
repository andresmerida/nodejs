const express = require('express')
const app = express()
const PORT = 8002

// middleware
app.use(express.json());

app.use((request, response, next) => {
  console.log(`${request.method} request for ${request.url}`);
  next();
})

function aboutMiddleWare(request, response, next) {
  if(request.query.name == 'clem') {
    next();
  } else {
    response.status(400).send('You are not allowed to view this page');
  }
}

// define a route for the home page
app.get('/', (request, response) => {
  response.send('Hello world!');
})
app.get('/about', aboutMiddleWare, (request, response) => {
  response.send('Abaut page');
})
app.get('/users', (request, response) => {
  response.send('Users page');
})

app.post('/data', (request, response) => {
  const body = request.body;  // JSON {'email': 'andresmerida@gmal.com'}
  response.send(body);
})
app.put('/data-edit', (request, response) => {
  const { body } = request;  // JSON {'email': 'andresmerida@gmal.com'}
  response.send({
    message: 'Successfully put',
    body: body
  })
})
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
})
