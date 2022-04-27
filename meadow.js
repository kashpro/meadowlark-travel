// import express from 'express'; //import доступен только в модулях
// import { engine } from 'express-handlebars';
const express = require('express');
const expressHandlebars = require('express-handlebars');

const fortunes = [
  "Победи свои страхи, или они победят тебя.",
  "Рекам нужны истоки.",
  "Не бойся неведомого.",
  "Тебя ждет приятный сюрприз.",
  "Будь проще везде, где только можно.",
  ]

const app = express();

//handlebars setup
app.engine('handlebars', expressHandlebars.engine({
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

//static folder
app.use(express.static(__dirname + '/public'));


//root page
app.get('/', (req, res) => {res.render('home');});

//about page
app.get('/about', (req, res) => {
  const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)];
  res.render('about', {fortune: randomFortune});
});


//404 page
app.use( (req, res) => {
  res.status(404);
  res.render('404');
} );

//500 page
app.use( (err, req, res, next) => {
  console.error(err.message);
  res.status(500);
  res.render('500');
} );

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}. Press CTRL+C to stop the server.`);
});