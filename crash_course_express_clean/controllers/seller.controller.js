function sellerCreate(request, response) {
  response.send('Response seller create');
}

function sellerEdit(request, response) {
  response.send('Response seller edit');
}

function sellerDelete(request, response) {
  response.send('Response seller delete');
}

module.exports = {
  sellerCreate,
  sellerEdit,
  sellerDelete
}