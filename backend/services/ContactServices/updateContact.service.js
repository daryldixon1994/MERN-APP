const Contacts = require("../../models/Contacts");

module.exports = {
    async UpdateContact (id, body) {
        try {
            return await Contacts.findByIdAndUpdate(id, {$set : {...body}});
        } catch(err) {
            console.log(err);
            return err
        }
    }
}
