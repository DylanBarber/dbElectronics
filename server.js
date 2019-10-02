//Dependencies
//For serving react, API, and SQL information
const express = require('express');
const path = require('path');
const mysql = require('mysql');
//For env variables 
const dotenv = require('dotenv').config();
//For testing
const cors = require('cors');
//For authentication
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//Assign express server to app
const app = express();
//user body parser for parsing body information on POST routes
app.use(bodyParser.json());
// Cors is only used for testing
app.use(cors());
//Create mySQL connection information
const sql = mysql.createConnection({
  host: 'localhost',
  user: process.env.SQL_HOST,
  password: process.env.SQL_PASSWORD,
  database: 'dbelectronics_db'
})
//Connect to DB
sql.connect();

//Load in React
app.use(express.static(path.join(__dirname, 'client/build')))

//In Progress JWT authentication
function verifyToken(req, res, next) {
  //get auth header value
  const bearerHeader = req.headers['authorization'];
  //Check if undefined
  if (typeof bearerHeader !== 'undefined') {
    //Split at the space
    const bearer = bearerHeader.split(' ');
    //Get token from array
    const bearerToken = bearer[1];
    //Set token
    req.token = bearerToken
    //Next
    next();
  } else {

    res.sendStatus(403);
  }

}

//GET route for products. Also has filter built into it. 
app.get('/api/products', (req, res) => {
  if (req.query.type) {
    sql.query('SELECT products.product_id, products.product_name, pricing.product_price, products.product_type, products.product_description, products.product_image, pricing.release_date FROM products JOIN pricing ON pricing.product_id=products.product_id WHERE products.product_type=?'
      , [req.query.type], (err, data) => {
        if (err) res.send(err);
        res.json(data);
        return
      })
  } else {
    sql.query('SELECT products.product_id, products.product_name, pricing.product_price, products.product_type, products.product_description, products.product_image, pricing.release_date FROM products JOIN pricing ON pricing.product_id=products.product_id'
      , (err, data, ) => {
        res.json(data);
      })
  }

})

//GET route for contacts. Also has filter built into it.
app.get('/api/contacts', (req, res) => {
  if (req.query.id) {
    sql.query('SELECT * FROM `contacts` WHERE contact_id=?', [req.query.id], (err, data) => {
      if (err) throw err;
      if (data.length === 0) {
        res.status(404).send(`Contact ${req.query.id} not found`);
      }
    });
  } else {
    sql.query('SELECT * FROM `contacts`', (err, data) => {
      res.json(data);
    })
  }
})

//GET route for invoices - CURRENTLY IN PROGRESS
app.get('/api/productinvoice/', (req, res) => {
  if (req.query.id) {
    sql.query('SELECT * FROM `pricing` WHERE invoice_id=?', [req.query.id], (err, data) => {
      if (err) throw err;
      if (data.length === 0) {
        res.status(404).send(`Invoice ${req.query.id} not found`);
      } else {
        res.json(data);
      }

    })
  } else {
    res.send('Please provide an invoice id. syntax is /api/productinvoice/?id=ID');
  }
})
//

//POST route for adding a new contact (Used on form submission)
app.post('/api/newcontact', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;
  if (name && email && subject && message) {
    sql.query("INSERT INTO `contacts` (contact_name, contact_email, subject, message) VALUES (?, ?, ?, ?)", [name, email, subject, message], (err) => {
      if (err) throw err;
      res.json({ name: name, email: email, subject: subject, message: message });
      return;
    });
  } else {
    res.send('You are missing a field. Syntax to add a user is /api/newcontact/?name=NAME&address=ADDRESS&city=CITY&country=COUNTRY');
  }
});


//POST test for API authentication (TESTING FOR JWT AUTHENTICATION)
app.post('/api/login', (req, res) => {
  const user = req.body.username;
  const pass = req.body.password;
  sql.query('SELECT * FROM `users` WHERE `username`=? AND `password`=?', [user, pass], (err, data) => {
    if (data.length === 0) {
      return res.send({ message: 'Incorrect username or password' });
    }
    return res.send({ message: 'Logged in. Redirecting...' });
    // return jwt.sign({ data }, process.env.JWT_KEY, { expiresIn: "60s" }, (err, token) => {
    //   if (err) res.status(500).send(err.message);
    //   console.log(token);
    //   return res.json({ token })
    // })
  })
})

//DELETE for contact deletion
app.delete('/api/deletecontact', (req, res) => {
  console.log(req.body.contact_id)
  sql.query('DELETE FROM contacts WHERE contact_id=?', [req.body.contact_id], (err, data) => {
    if (err) return res.status(500).send(err);
    res.send({ message: `User ${req.body.contact_id} was deleted from the database` })
  })
})

//POST route for purchase
app.post('/api/purchase', (req, res) => {
  console.log(req.body)
  res.json({ "test": "test" });
})


//Catchall react handler
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 25565;

//Listen on port
app.listen(port, () => {
  console.log(`Listening on ${port}...`);
});