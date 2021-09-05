const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const salaryplanSchema = new Schema({

    role_name: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }


});

module.exports = person = mongoose.model("salaryplan", salaryplanSchema);