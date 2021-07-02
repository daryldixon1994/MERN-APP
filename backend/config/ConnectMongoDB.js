const mongoose = require('mongoose');
require('dotenv').config();

let URI = process.env.URI;

const ConnectDB = () => {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false 
    }).then(()=>console.log('connected to database successfully')).catch((err) => console.log("unable to connect to database"));
}
module.exports = ConnectDB();