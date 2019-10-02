# dbElectronics

## Installation
This site will not properly run without the SQL resources. All insert statements, and create table statements can be found in /dB Schema/ and must be ran in mySQL. 
All node_modules are git ignored. Please run `npm i` to install all modules. 

## Diagrams
The ERD (Entity Relationship Diagram) can be found in /work/ERD
The FDD (Functional Decomposition Diagram) can be found in /work/FDD

## Invoices
The invoices and invoice_items tables are purely for example currently until a payment engine is set up that will authorize payments and then create an invoice. Currently, when "Complete Purchase" is clicked in the checkout all of the cart data is passed to the back end and the response ends.

## Tests
The test script is held in /test/ and can be ran from the project root with `npm run test`. These tests utilize Mocha and Chai

## Execution
To run this project in production mode run the command `node server.js` from the root folder. 
To run this project in development mode run the command `npm start dev` from the root folder. 

## Admin authentication
There is currently no JWT authentication, however it is installed as a module. You may insert your own credentials into the `users` table and log in with those credentials for testing. 
**NOTE THAT YOU MUST CREATE YOUR OWN SECURE AUTHENTICATION BEFORE PRODUCTION OR REMOVE THE ADMIN PAGE AS THERE IS A SEVERE VULNERABILITY** 