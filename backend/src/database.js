const mongoose = require('mongoose')
mongoose.connect(
    'mongodb+srv://fezinho11:123felao@cluster0-mtv2i.mongodb.net/weed?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => error ? console.log('connection to the database have failed') : console.log('connection success')
  );