const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://andresmerida1:Campeon123!@cluster0.d8xii.mongodb.net/?retryWrites=true&w=majority&appName=cluster0');
const db = mongoose.connection;

db.on('error', (error) => {
  console.log(error);
})
db.once('open', async() => {
  console.log('Database Connected');
  // to perform crud operations 1 create a schema, 2 create a model, 3 perform operations
  // user schema
  const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    isMarried: Boolean
  })

  // step 2 making a model
  const User = mongoose.model('user', userSchema);

  /**
  // create a new user
  const newUser = new User({
    firstName: 'Andres',
    lastName: 'Merida',
    age: 39,
    isMarried: true
  })

  newUser.save().then((_user) => {
    console.log(`Ner user: ${_user}`);
  }).catch((e) => {
    console.log(e);
  })
  */

  // Read part
  try {
    const foundUser = await User.findOne({
      firstName: 'Andres'
    })
    console.log(foundUser);
  } catch(e) {
    console.log(e, 'Error in finding a user by name');
  }
  
})
