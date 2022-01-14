const express = require('express');
const bodyParser = require('body-parser');
const readTalker = require('./middlewares/readTalker');
const findTalkerByid = require('./middlewares/findTalkerById');
const validEmail = require('./middlewares/validEmail');
const validPassword = require('./middlewares/validPassword');
const postLogin = require('./middlewares/postLogin');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker', readTalker);
app.get('/talker/:id', findTalkerByid);
app.post('/login', validEmail, validPassword, postLogin);