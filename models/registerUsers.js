const mongoose = require('mongoose')

const User = new mongoose.Schema({
    FirstName: { type: String, requried: true, maxlength: 50 },
    LastName: { type: String, requried: true, maxlength: 50 },
    Email: { type: String, requried: true, unique: true, trim: true },
    Number: { type: String, requried: true },
    input: { type: String }
},
    { collections: 'Registred-Data' }
)

const model = mongoose.model('RegisterData', User)

module.exports = model


