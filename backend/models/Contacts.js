const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    firstName: {
        type: "string",
        required: true,
    },
    lastName: {
        type: "string",
        required: true,
    },
    phoneNumber: {
        type: "number",
        required: true,
        unique : true,
    },
    email: {
        type: "string",
        required : true,
        unique : true,
    },
    image : {
        type : "string"
    }
});

module.exports = Contact = mongoose.model("contact", contactSchema);
