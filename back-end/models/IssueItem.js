const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const issueitemSchema = new Schema({

    product_name : {
        type : String,
        required : true
    },
    model_number : {
        type : String,
        required : true
    },
    issue_by : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    date : {
        type : Date,
        required : true
    }

})

const IssueItem = mongoose.model("IssueItem", issueitemSchema);

module.exports = IssueItem;