const mongoose = require ('mongoose') ;

const Schema = mongoose.Schema ;

const orderSchema = new Schema ({

    username: { 
        type: String, 
        required: true 
    },

    bankName :{
        type: String,
        required : true
    },
    
    amount :{
        type: Number,
        required : true
    },
    
    orderDate : {
        type : String ,
        required : true
    },
    
    phone :{
        type :String ,
        required : true
    },

    itemName :{
        type : String ,
        required : true 
    },

    qty : {
        type : Number ,
        required : true
    },

    itemPrice: {
        type: Number,
        required: true
    },
    
    address : {
          type : String ,
          required : true 
    },
    
    orderStatus : {
        type : String ,
        required : true 
    }

})

const Order  = mongoose.model("Order" , orderSchema);

module.exports = Order ;