const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const mainRouter = require('./routes/index')



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {

    console.log('Сервер запущено на порту 3000');

});

app.use('/', mainRouter);

module.exports = app;



