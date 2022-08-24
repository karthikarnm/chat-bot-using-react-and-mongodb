const mongoose = require('mongoose')

const User = new mongoose.Schema({
   
    Email: { type: String, requried: true, unique: true, trim: true },
    input: { type: String }
},
    { collections: 'Login-data' }
)

const model = mongoose.model('loginData', User)

module.exports = model
