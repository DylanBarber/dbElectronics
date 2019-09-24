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
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

//GET route for products
app.get('/api/products', (req, res) => {
  if (req.query.type) {
    sql.query('SELECT * FROM products WHERE product_type=?', [req.query.type], (err, data) => {
      if (err) res.send(err);
      res.json(data);
      return
    })
  } else {
    sql.query('SELECT * FROM products', (err, data, ) => {
      res.json(data);
    })
  }

})
//GET route for contacts
app.get('/api/contacts', (req, res) => {
  if(req.query.id){
    sql.query('SELECT * FROM `contacts` WHERE contact_id=?', [req.query.id], (err, data) => {
      if (err) throw err;
      if (data.length === 0){
        res.status(404).send(`Contact ${req.query.id} not found`);
      }
    });
  } else {
    sql.query('SELECT * FROM `contacts`', (err, data) => {
      res.json(data);
    })
  }
})


//POST route for adding a new contact
app.post('/api/newcontact', (req, res) => {
  const name = req.query.name;
  const address = req.query.address;
  const city = req.query.city;
  const country = req.query.country;
  if (name && address && city && country) {
    sql.query("INSERT INTO `contacts` (contact_name, contact_address, contact_city, contact_country) VALUES (?, ?, ?, ?)", [name, address, city, country], (err) => {
      if (err) throw err;
      res.json({ name: name, address: address, city: city, country: country });
      return;
    });
  } else {
    res.send('You are missing a field. Syntax to add a user is /api/newcontact/?name=NAME&address=ADDRESS&city=CITY&country=COUNTRY');
  }
});



const port = process.env.PORT || 25565;

app.listen(port, () => {
  console.log(`Listening on ${port}...`);
});