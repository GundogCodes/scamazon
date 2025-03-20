require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

console.log("MongoDB URI:", process.env.MONGODB_URI);

const db = mongoose.connection;


db.on('connected', () => {
  console.log(
    `Connected to ${db.name} at ${db.host}:${db.port} Sincerely - Jeff Bozos!`
  );
});

db.on('error', (err) => {
  console.log(`Error connecting to MongoDB: `, err);
});

module.exports = mongoose;
