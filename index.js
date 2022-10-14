const express = require('express')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());

const subjectsList = []

// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.get('/subjects', function (req, res) {
  res.send(subjectsList)
})

app.post('/subjects', function (req, res) {
  const { body } = req;
  const { subject } = body
  subjectsList.push(subject)
  res.send(subjectsList)
})

app.listen(4000)


// status responses rest api
// 200 hasta el 299 => procesos fueron exitosos
// 400 al 499 => procesos tiene errores en el codigo
// 500 para arriba => errores de servidor