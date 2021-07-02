const services = require('../../services')
module.exports= {
    async UpdateContact (req, res) {
        try {
        let {id} = req.params;
        let body = req.body;
        let editContact = await services.ContactServices.update.UpdateContact(id, body)
        res.status(201).json({status : true, message:"contact was edited successfully", data: editContact})
        }catch(err) {
            res.status(500).json({status : false, message:"can't find the contact"});
            console.log(err)
        }
    }
}