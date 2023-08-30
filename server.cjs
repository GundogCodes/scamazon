require('dotenv').config();
require('./config/database.cjs');
const express = require('express');
const app = require('./app-server.cjs');
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose');
const path = require('path');

/* Add MongoDB here after connecting database in .env
const MONGODB_URI = process.env.MONGODB_URI
const db = mongoose.connection;

mongoose.connect(MONGODB_URI);
db.on('open', () => {
    console.log('Mongo is Connected');
});
*/

/* Middleware */
app.use(express.json());
if (process.env.NODE_ENV !== 'development') {
  app.use(express.static('public'));
}

/* forcing express to recognize an object as data */
app.us ((req, res, next) => {
  res.locals.data = {};
  next();
})

/* Controller Goes Here Remove the test*/
app.get('/test', (req, res) => {
  res.status(200).json({
    website: 'My Website',
    info: 'Not that much',
  });
});
/* Controller Ends here */
//LISTENER

// for react router
app.get('*', (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')));
});

app.listen(PORT, () => {
  console.log(`API Listening on port ${PORT}`);
});
