const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    Name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

module.exports = model('User', userSchema);