const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const mysql = require('mysql');
const dotenv = require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = ('cookie-parser');


const app = express();

app.use(bodyParser.json());
app.use(cors());
const sql = mysql.createConnection({
  host: 'localhost',
  user: process.env.SQL_HOST,
  password: process.env.SQL_PASSWORD,
  database: 'dbelectronics_db'
})
sql.connect();


app.use(express.static(path.join(__dirname, 'client/build')))

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
//GET route for invoices
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

//POST route for adding a new contact
app.post('/api/newcontact', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;
  console.log(name, email, subject, message)
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


//POST test for API authentication
app.post('/api/login', (req, res) => {
  console.log(req.body)
  const user = req.body.username;
  const pass = req.body.password;
  sql.query('SELECT * FROM `users` WHERE `username`=? AND `password`=?', [user, pass], (err, data) => {
    if (data.length === 0) {
      return res.status(403).send('Username or password is incorrect');
    }
    return jwt.sign({ data }, process.env.JWT_KEY, { expiresIn: "60s" }, (err, token) => {
      if (err) res.status(500).send(err.message);
      console.log(token);
      return res.json({ token })


    })
  })
})





const port = process.env.PORT || 25565;

app.listen(port, () => {
  console.log(`Listening on ${port}...`);
});