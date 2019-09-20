const express = require('express');
const path = require('path')
const mysql = require('mysql');
const dotenv = require('dotenv').config();

const app = express();
const sql = mysql.createConnection({
  host: 'localhost',
  user: process.env.SQL_HOST,
  password: process.env.SQL_PASSWORD,
  database: 'dbelectronics_db'
})
sql.connect();


app.use(express.static(path.join(__dirname, 'client/build')))

//Catchall handler for react app
app.get('/products' || '/' || '/contact', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

//GET route for all products
app.get('/api/products', (req, res) => {
  sql.query('SELECT * FROM products', (err, data,) => {
    res.json(data);
  })
})

const port = process.env.PORT || 25565; 

app.listen(port, () => {
  console.log(`Listening on ${port}...`);
});