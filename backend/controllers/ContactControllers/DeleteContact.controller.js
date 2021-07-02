const services = require('../../services')
module.exports = {
    async DeleteContact (req, res) {
        try {
        let {id} = req.params;
        const userRemoved = await services.ContactServices.delete.DeleteContact(id)
        res.status(201).json({
            status: true,
            message: "contact removed successfully",
            data: userRemoved,
        });
        }catch (err) {
            res.status(500).json({status: false, message: err})
        }
    }
}