const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdminfeedbackSchema = new Schema({

    admin_email : {
        type : String,
        required: true
    },
    issue:{
        type:String,
        required: true
    },
    date_ob:{
        type:Date,
        required: true
    }

})

const adminfeedback = mongoose.model("Adminfeedback",AdminfeedbackSchema);

module.exports = adminfeedback;