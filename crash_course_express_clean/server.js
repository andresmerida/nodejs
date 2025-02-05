const express = require('express');
const app = express();
const PORT = 8002;

// meddleware
app.use(express.json());
app.use('/', require('./routes/home.route'));
app.use('/buyer', require('./routes/buyer.route'));
app.use('/seller', require('./routes/seller.route'));

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
})