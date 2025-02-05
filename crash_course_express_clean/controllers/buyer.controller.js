function buyerCreate(request, response) {
  response.send('Response buyer create');
}

function buyerEdit(request, response) {
  response.send('Response buyer edit');
}

function buyerDelete(request, response) {
  response.send('Response buyer delete');
}

module.exports = {
  buyerCreate, 
  buyerEdit, 
  buyerDelete
}