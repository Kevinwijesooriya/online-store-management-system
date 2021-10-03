const mongoose = require ('mongoose');
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;


const adminSchema = new Schema({

    name :{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique : true,
    },
    phone:{
        type : Number,
        required : true
    },
    gender:{
        type : String,
        required : true
    },
    loginType:{
        type : String,
        required : true
    },
    // username:{
    //     type : String,
    //     required : true
    // },
    password:{
        type : String,
        required : true
    },
    pic:{
        type : String,
        required : true,
        default :
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDoisN_XW3IVsEn4qXXTiqfTFBCCQOWqDFg&usqp=CAU",
    },
},
{
    timestamps: true,
}
);

adminSchema.pre("save" ,async function (next){

    if(!this.isModified("password")){

        next();
    }
const salt = await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password, salt);

});


adminSchema.methods.matchPassword = async function (enteredPassword){
   return await bcrypt.compare(enteredPassword , this.password);
};

const admin =  mongoose.model("Admin",adminSchema);

module.exports = admin;