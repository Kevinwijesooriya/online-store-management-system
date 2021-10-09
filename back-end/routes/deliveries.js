const router = require("express").Router();
let Delivery = require("../models/Delivery");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const address = req.body.address;
    const street = req.body.street;
    const city = req.body.city;
    const postal_code = Number(req.body.postal_code);
    let date_ob = new Date();

    const newDelivery = new Delivery({
        name,
        address,
        street,
        city,
        postal_code,
        date_ob
    })

    newDelivery.save().then(()=>{
        res.json("Delivery Details Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{
    
    Delivery.find().then((deliveries)=>{
        res.json(deliveries)
    }).catch((err)=>{
        console.log(err)
    })
})



router.route("/update/:id").put(async (req,res) =>{
    let DeliveryUserId = req.params.id;
    const {name, address, street, city, postal_code } = req.body;
    let date_ob = new Date();

    const updateDeliveryDetails = {
        name,
        address,
        street,
        city,
        postal_code,
        date_ob
    }

    const update = await Delivery.findByIdAndUpdate(DeliveryUserId, updateDeliveryDetails)
    .then(() => {
        res.status(200).send({status: "Delivery User Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})


router.route("/delete/:id").delete(async (req, res) => {
    let DeliveryUserId = req.params.id;

    await Delivery.findByIdAndDelete(DeliveryUserId)
    .then(() => {
        res.status(200).send({status: "Delivery User Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
    let DeliveryUserId = req.params.id;
    const user = await Delivery.findById(DeliveryUserId)
    .then((delivery) => {
        res.status(200).send({status: "Delivery User fetched", delivery})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})
module.exports = router;