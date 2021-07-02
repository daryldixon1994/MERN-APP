const services = require("../../services")
module.exports = {
        async readContactbyName (req, res) {
        try {
            const { firstName } = req.params;
            const contact =
                await services.ContactServices.getName.GetContactByName(
                    firstName
                );
            res.status(201).json({
                status: true,
                message: "your contact list",
                data: contact,
            });
        } catch(err) {
            res.status(500).json({status : false, message :err});
        console.log(err)
        }
    }
}
