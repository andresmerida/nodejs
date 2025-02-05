function home(request, response) {
  console.log('This is home');
  response.send('Home page');
}

function about(request, response) {
  console.log('This is about');
  response.send('About response');
}

function contact(request, response) {
  console.log('This is contact');
  response.send('Contact response');
}

module.exports = {
  home,
  about,
  contact
}