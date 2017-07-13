const express = require('express');
const port = process.env.PORT || 3000;
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

app.listen(port, () => { console.log(`Server is up at ${port}`)});
