const mongoose = require('mongoose')

const User = new mongoose.Schema({
    Msg: { type: String, requried: true }
},
    { collections: 'chat-messages' }
)

const model = mongoose.model('Chat', User)

module.exports = model