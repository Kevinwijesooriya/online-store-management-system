const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema({

    month: {
        type: String,
        required: true
    },
    monthly_income: {
        type: Number,
        required: true
    },
    monthly_expences: {
        type: Number,
        required: true
    },
    monthly_profit: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
    

});

module.exports = person = mongoose.model("budget", budgetSchema);