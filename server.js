const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");
const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'Db',
});


const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  db.connect((err) => {
    if (err) {
      res.send({
        message: "error database "
      })
    } else {
      res.json({ message: "Welcome to bezkoder application." });
    }

  });


});

require("./app/routes/tutorial.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// const express = require('express');
// const mysql = require('mysql');

// // Create connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'Db',
// });

// // Connect to MySQL
// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('Connected to MySQL database');
// });

// // Create an Express app
// const app = express();

// // Define a route
// app.get('/', (req, res) => {
//   // Perform a database query
//   db.query('SELECT * FROM your_table', (err, result) => {
//     if (err) {
//       throw err;
//     }
//     // Send the result as JSON
//     res.json(result);
//   });
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });