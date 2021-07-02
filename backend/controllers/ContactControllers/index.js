module.exports = {
    create : require('./CreateContact.controller'),
    read : require('./ReadContact.controller'),
    readByName : require('./ReadContactByName.controller'),
    delete : require('./DeleteContact.controller'),
    update : require('./UpdateContact.controller')
}