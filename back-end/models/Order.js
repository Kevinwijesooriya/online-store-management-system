const mongoose = require ('mongoose') ;

const Schema = mongoose.Schema ;

const orderSchema = new Schema ({
    orderID : {
        type : String,
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
    orderStatus : {
        type : String ,
        required : true 
    },
    orderDate : {
        type : String ,
        required : true
    }

})

const Order  = mongoose.model("Order" , orderSchema);

module.exports = Order ;