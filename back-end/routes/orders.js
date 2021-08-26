const router = require("express").Router();
let Order = require("../models/Order");

router.route("/add").post((req , res) => {
    const orderID = req.body.orderID;
    const itemName = req.body.itemName;
    const qty = Number(req.body.qty);
    const orderStatus = req.body.orderStatus;
    const orderDate = req.body.orderDate;

    const newOrder = new Order ({
        orderID,
        itemName,
        qty,
        orderStatus,
        orderDate

    })

    newOrder.save().then(() => {
        res.json("Order Added ")
    }).catch((err) => {
        console.log(err) ;
    })

})

router.route("/").get((req , res) => {
    Order.find().then((order) => {
        res.json(order)
    }).catch((err) =>{
        console.log(err)
    })
}) 

router.route("/update/:id").put(async (req , res) => {
    let orderId = req.params.id ;
    const {orderID , itemName , qty , orderStatus , orderDate} = req.body;

    const updateOrder = {
        orderID,
        itemName ,
        qty ,
        orderStatus ,
        orderDate
    }

    const update = await Order.findByIdAndUpdate(orderId , updateOrder).then(() => {
        res.status(200).send({status: "Order Updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating order" , error :err.message});
    })
})

router.route("/delete/:id").delete(async (req,res) => {
    let orderId = req.params.id;

    await Order.findByIdAndDelete(orderId).then(() => {
        res.status(200).send({status: "Order Deleted "});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting order" , error :err.message}); 
    })
})

router.route("/get/:id").get(async (req , res) => {
    let orderId = req.params.id;
    const order1 = await Order.findById(orderId).then((order) => {
        res.status(200).send({status: "Order fetched " ,  order })
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get order" , error :err.message}); 
    })
})
module.exports = router ;
 