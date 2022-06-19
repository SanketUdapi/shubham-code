const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const student = new Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },

});

module.exports = mongoose.model("students", student);