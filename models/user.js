const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    age: {
        type: Number,
        require:true
    },
    email: {
        type: String,
        
    },
    number: {
        type: Number,
        require:true
    },
    aadharCardNumber: {
        type: Number,
        require: true,
        unique:true,
    },
    password: {
        type: String,
        require:true,
    },
    role: {
        type: String,
        enum: ['voter', 'admin'],
        default:'voter'
    },
    isVoted: {
        type: Boolean,
        default:false
    }
})
const User = mongoose.model('User', userSchemaSchema);
module.exports = User;