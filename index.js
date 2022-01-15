const express = require('express');
const bodyParser = require('body-parser');
const readTalker = require('./middlewares/readTalker');
const findTalkerByid = require('./middlewares/findTalkerById');
const validEmail = require('./middlewares/validEmail');
const validPassword = require('./middlewares/validPassword');
const postLogin = require('./middlewares/postLogin');
const addTalker = require('./middlewares/addTalker');
const validAge = require('./middlewares/validAge');
const validDate = require('./middlewares/validDate');
const validName = require('./middlewares/validName');
const validRate = require('./middlewares/validRate');
const validTalk = require('./middlewares/validTalk');
const validToken = require('./middlewares/validToken');
const editTalker = require('./middlewares/editTalker');
const deleteTalkerByid = require('./middlewares/deleteTalkerByid');
const searchTalker = require('./middlewares/searchTalker');

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

app.get('/talker/search', validToken, searchTalker);
// app.get('/talker/search', searchTalker);
app.get('/talker', readTalker);
app.get('/talker/:id', findTalkerByid);
app.post('/login', validEmail, validPassword, postLogin);
app.post('/talker', validToken, validName, validAge, validTalk, validDate, validRate, addTalker);
// app.post('/talker', validName, validAge, validTalk, validDate, validRate, addTalker);
app.put('/talker/:id', validToken, validName, validAge,
  validTalk, validDate, validRate, editTalker);
// app.put('/talker/:id', validName, validAge,
//   validTalk, validDate, validRate, editTalker);
app.delete('/talker/:id', validToken, deleteTalkerByid);
// app.delete('/talker/:id', deleteTalkerByid);
