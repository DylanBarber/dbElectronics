const express = require('express');
const path = require('path')
const mysql = require('mysql');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors());
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

//GET route for products
app.get('/api/products', (req, res) => {
  if (req.query.type){
    sql.query('SELECT * FROM products WHERE product_type=?',[req.query.type], (err, data) => {
      if (err) res.send(err);
      res.json(data);
      return
    })
  } else {
    sql.query('SELECT * FROM products', (err, data,) => {
      res.json(data);
    })
  }
  
})

const port = process.env.PORT || 25565; 

app.listen(port, () => {
  console.log(`Listening on ${port}...`);
});