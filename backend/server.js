const express = require("express");
const app = express();
app.use(express.json());
const ConnectDB = require('./config/ConnectMongoDB')
require('dotenv').config();
let PORT = process.env.PORT || 5000;

// connect to database
ConnectDB;

app.use(require('./routes'))
app.listen(PORT, ((err) => {
    if (err) throw err
    console.log(`connected on port ${PORT}`)
}))