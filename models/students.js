const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const student = new Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    phNumber: {
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