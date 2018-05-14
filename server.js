const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static('public'));

app.get('/', function(req,res){
  res.render('index.ejs');
});

app.get('/about', function(req,res){
  res.render('about.ejs');
});

app.listen(port);
console.log('---------------------------------');
console.log('Server running on port: ' + port);
console.log('---------------------------------');
