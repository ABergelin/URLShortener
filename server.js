const express = require('express');
const app = express();
const mongoose = require('mongoose');

const ShortUrl = require('./models/shortUrl');

const PORT = 5000;

mongoose.connect('mongodb://localhost/shrtURL', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.use('/api', require('./routes/convert'));
app.use('/', require('./routes/redirect'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
