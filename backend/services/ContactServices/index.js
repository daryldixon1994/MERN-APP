
module.exports = {
    create : require('./createContact.service'),
    get : require('./getContact.service'),
    getName : require('./getContactByName.service'),
    delete : require('./deleteContact.service'),
    update : require('./updateContact.service')
}