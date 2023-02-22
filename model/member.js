const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    nickname : {type:String ,default : null},
    thainame : {type:String ,default : null},
    engname : {type: String , default : null},
    imageurl : {type: String , default : null},
    teaminfo : {type: String , default : null},
    dateofbirth : {type: String , default : null},
    height : {type: String , default : null},
    province : {type: String , default : null},
    bloodgroup : {type: String , default : null},
})

module.exports = mongoose.model('member',memberSchema);