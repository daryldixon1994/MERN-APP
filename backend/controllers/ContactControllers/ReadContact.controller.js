const services = require("../../services");
module.exports = {
    async readContact(req, res) {
        try {
            const contactList = await services.ContactServices.get.GetContact();
            res.status(201).json({
                status: true,
                message: "your contact list",
                data: contactList,
            });
        } catch (err) {
            res.status(500).json({ status: false, message: err });
            console.log(err);
        }
    },
};
