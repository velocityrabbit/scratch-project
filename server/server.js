const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.resolve(__dirname, '../')));
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));

// react router
app.get('/user', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));
app.get('/item/:id', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));
app.get('/logIn', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));
app.get('/logOut', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));
app.get('/createItem', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));


app.use('*', (req, res) => {
  res.status(404).send('Bad Request');
});

app.use((err, req, res, next) => {
  console.log('Global error handler: ', err);
  res.status(500).send(err);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
