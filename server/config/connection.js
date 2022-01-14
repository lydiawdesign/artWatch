const mongoose = require('mongoose');

// do not push with this URI 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/artWatch', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}, err => {
  if(err) throw err;
  console.log('Connected to MongoDB')
  console.log(process.env.MONGODB_URI)
});

module.exports = mongoose.connection;
