const express = require('express');
var app = express();

app.get("/", (req,res) => {
  // res.send('<h1>Hello Git!</h1>');
  res.send({name: 'Markus',
            likes: ['Cars','People']
          });
});

app.get("/about", (req,res) => {
  res.send('A simple git test');
});

app.get("/bad", (req,res) => {
  res.send({errorMessage: 'Cannot find this page!'});
});

app.listen(3000);
