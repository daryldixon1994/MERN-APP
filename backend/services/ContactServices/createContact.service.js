const Contact = require('../../models/Contacts');

module.exports = {
    async CreateContact(firstName, lastName, phoneNumber, email, image) {
        try {
            return await Contact.create({
                firstName,
                lastName,
                phoneNumber,
                email,
                image,
            });
        } catch (err) {
            console.log(err);
            return err;
        }
    },
};