const Contacts = require("../../models/Contacts");

module.exports = {
    async DeleteContact(id) {
        try {
            return await Contacts.findByIdAndRemove(id);
        } catch (err) {
            console.log(err);
            return err;
        }
    },
};
