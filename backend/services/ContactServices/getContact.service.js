const Contact = require("../../models/Contacts");
module.exports = {
    async GetContact() {
        try {
            return await Contact.find();
        } catch (err) {
            console.log(err);
            return err;
        }
    },
   
};