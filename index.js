const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const { User } = require('./app/models');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// how to create new user
//User.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' });

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/register', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.get('/find/:id', (req, res) => {
  res.json('Im in register');
});

app.get('/findall', (req, res) => {
  res.json('Im in Find All');
});

app.put('/update/:id', (req, res) => {
  res.json('Im in update');
});

app.delete('/delete/:id', (req, res) => {
  res.json('Im in delete'+id);
});

app.listen(3100);