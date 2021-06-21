
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    gender: {
        type: String,
        enum: ["MALE", "FEMALE", "OTHER"]
    },
    age: {
         type: Number
    },
    city: String
});

const User = model('User', UserSchema);

module.exports = {
    User,
    UserSchema
}


