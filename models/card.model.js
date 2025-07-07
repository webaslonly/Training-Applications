const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
});

module.exports = model('Card', cardSchema)