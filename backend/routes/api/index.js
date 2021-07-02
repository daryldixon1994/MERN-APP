const router = require("express").Router();
const controllers = require("../../controllers");

router.post(
    "/createContact",
    controllers.ContactControllers.create.createContact
);
router.get("/contactList", controllers.ContactControllers.read.readContact);
router.get(
    "/contactList/:firstName",
    controllers.ContactControllers.readByName.readContactbyName
);
router.delete(
    "/deleteContact/:id",
    controllers.ContactControllers.delete.DeleteContact
);
router.put("/editContact/:id", controllers.ContactControllers.update.UpdateContact);

module.exports = router;
