const router = require("express").Router();
let Courier = require("../models/Courier");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const address = req.body.address;
    const e_mail = req.body.e_mail;
    const contact_no = Number(req.body.contact_no);
    let date_ob = new Date();

    const newCourier = new Courier({
        name,
        address,
        e_mail,
        contact_no,
        date_ob
    })

    newCourier.save().then(()=>{
        res.json("Courier Details Added")
    }).catch((err)=>{
        console.log(err);
    })

}) 

router.route("/").get((req,res)=>{
    
    Courier.find().then((couriers)=>{
        res.json(couriers)
    }).catch((err)=>{
        console.log(err)
    })
})



router.route("/update/:id").put(async (req,res) =>{
    let CourierUserId = req.params.id;
    const {name, address, e_mail, contact_no } = req.body;
    let date_ob = new Date();

    const updateCourierDetails = {
        name,
        address,
        e_mail,
        contact_no,
        date_ob
    }

    const update = await Courier.findByIdAndUpdate(CourierUserId, updateCourierDetails)
    .then(() => {
        res.status(200).send({status: "Courier User Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})


router.route("/delete/:id").delete(async (req, res) => {
    let CourierUserId = req.params.id;

    await Courier.findByIdAndDelete(CourierUserId)
    .then(() => {
        res.status(200).send({status: "Courier User Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
    let CourierUserId = req.params.id;
    const user = await Courier.findById(CourierUserId)
    .then((courier) => {
        res.status(200).send({status: "Courier User fetched", courier})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})
module.exports = router;