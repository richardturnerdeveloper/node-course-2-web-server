const express = require('express');
const port = process.env.PORT || 3000;
const hbs = require('hbs');

var app = express();

app.set('view-engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getDate', () => {
  return new Date().getFullYear();
})


app.get("/", (req,res) => {
  res.render('home.hbs', {
    welcomeMessage: 'welcome Message'
  });
});

app.get("/about", (req,res) => {
  res.render('about.hbs');
});

app.get("/projects", (req,res) => {
  res.render('projects.hbs');
});

app.get("/bad", (req,res) => {
  res.send({errorMessage: 'Cannot find this page!'});
});

app.listen(port, () => { console.log(`Server is up at ${port}`)});
