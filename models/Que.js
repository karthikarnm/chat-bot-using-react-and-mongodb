const mongoose = require('mongoose')
 
const User = new mongoose.Schema({
    Que : {type : String },
    
    },{timestamps:true},
    {collections : 'Questions'  }
    );

const model = mongoose.model('Questions',User)
 
module.exports = model