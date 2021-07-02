const services = require("../../services");
module.exports = {
    async createContact(req, res) {
        try {
            const { firstName, lastName, phoneNumber, email, image } = req.body;
            if (phoneNumber.toString().length !== 8) {
                res.status(406).json({
                    status: false,
                    message: "phone number must contains 8 digits",
                });
            }
            if (!email.includes("@")) {
                res.status(406).json({
                    status: false,
                    message: "e-mail must contains @",
                });
            }
            const newContact =
                await services.ContactServices.create.CreateContact(
                    firstName,
                    lastName,
                    phoneNumber,
                    email,
                    image
                );
            res.status(201);
            res.json({status: true, message: 'contact created successfully', newContact});
        } catch (err) {
            res.status(500).json({ status: false, message: err });
            console.log(err);
        }
    },
};
