//Dependencies
//For serving react, API, and SQL information
const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
//For env variables 
const dotenv = require('dotenv').config();
//For testing
const cors = require('cors');
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

//POST route for purchase
app.post('/api/purchase', (req, res) => {
  res.json({ "message": "Server needs payment authorization API before purchases can be made. Your payment data has not been stored anywhere" });
})

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

//GET route for products. Also has filter built into it. 
app.get('/api/products', (req, res) => {
  //If a product type is supplied, send only that product type
  if (req.query.type) {
    sql.query('SELECT products.product_id, products.product_name, pricing.product_price, products.product_type, products.product_description, products.product_image, pricing.release_date FROM products JOIN pricing ON pricing.product_id=products.product_id WHERE products.product_type=?'
      , [req.query.type], (err, data) => {
        if (err) res.send(err);
        res.json(data);
        return
      })
    //Else send all products
  } else {
    sql.query('SELECT products.product_id, products.product_name, pricing.product_price, products.product_type, products.product_description, products.product_image, pricing.release_date FROM products JOIN pricing ON pricing.product_id=products.product_id'
      , (err, data, ) => {
        res.json(data);
      })
  }

})

//GET route for contacts. Also has filter built into it.
app.get('/api/contacts', (req, res) => {
  //If a contact ID is supplied, send information on the supplied ID
  if (req.query.id) {
    sql.query('SELECT * FROM `contacts` WHERE contact_id=?', [req.query.id], (err, data) => {
      if (err) res.status(500).send(err);
      if (data.length === 0) {
        return res.status(404).send(`Contact ${req.query.id} not found`);
      }
      res.json(data);
    });
    //Else send all contacts
  } else {
    sql.query('SELECT * FROM `contacts`', (err, data) => {
      if (err) res.status(500).send(err);
      res.json(data);
    })
  }
})

//GET route for invoices
app.get('/api/productinvoice', (req, res) => {
  if (req.query.id) {
    sql.query('SELECT * FROM invoices WHERE id=?', [req.query.id], (err, data) => {
      if (err) return res.status(500).send(err);
      if (data.length === 0) {
        return res.status(404).send(`Invoice ${req.query.id} not found`);
      }
      return res.json(data);
    })
  }
  res.send('Please supply an invoice ID');
})

app.put("/api/updatecontact", (req, res) => {
  sql.query("SELECT * FROM contacts WHERE contact_id=?", [req.body.id], (err, rows) => {
    if (err) res.status(500).send(err);
    if (rows.length !== 0) {
      const contact = rows[0];
      if (req.body.contact_name) {
        contact.contact_name = req.body.contact_name;
      }
      if (req.body.contact_email) {
        contact.contact_email = req.body.contact_email;
      }
      if (req.body.subject) {
        contact.subject = req.body.subject;
      }
      if (req.body.message) {
        contact.message = req.body.message;
      }
      sql.query("UPDATE contacts SET contact_name = ?, contact_email = ?, subject = ?, message = ? WHERE contact_id = ?", [contact.contact_name, contact.contact_email, contact.subject, contact.message, req.body.id], (err, data) => {
        if (err) res.status(500).send(err);
        res.send(contact);
      });
    } else {
      return res.status(404).send("Contact not found");
    }
  });
});

//DELETE for contact deletion
app.delete('/api/deletecontact', (req, res) => {
  sql.query('DELETE FROM contacts WHERE contact_id=?', [req.body.contact_id], (err, data) => {
    if (err) return res.status(500).send(err);
    res.send({ message: `User ${req.body.contact_id} was deleted from the database` })
  })
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