function save(request, response) {
  let body = '';
  request.on('data', (chunk) => {
    body += chunk;
  })

  request.on('end', () => {
    response.statusCode = 201;
    response.setHeader('Content-Type', 'text/plain');
    response.end(`Here is the user data saved: ${body}`)
  })
}

module.exports = save;