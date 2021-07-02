const Contact = require("../../models/Contacts")
module.exports = {
    async GetContactByName(firstName) {
        try {
            return await Contact.findOne({ firstName });
        } catch (err) {
            console.log(err);
            return err;
        }
    },
};