const router = require("express").Router();
let OnlineStore = require("../models/cart");

router.route("/add").post((req,res)=>{
    const customerID = req.body.customerID;
    const productID = req.body.productID;
    const price = Number(req.body.price);
    const quantity = Number(req.body.quantity);

    const newOnlineStore = new OnlineStore({
        customerID,
        productID,
        price,
        quantity
    })

    newOnlineStore.save().then(()=>{
        res.json("Details Added")
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/").get((req,res)=>{

    OnlineStore.find().then((onlinestores)=>{
        res.json(onlinestores)
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/update/:id").put(async (req, res)=>{
    let userId = req.params.id;
    const  {customerID, productID,price, quantity} = req.body;

    const updateOnlineStore = {
        customerID,
        productID,
        price,
        quantity
    }
    const update = await OnlineStore.findByIdAndUpdate(userId, updateOnlineStore).then(()=>{
        res.status(200).send({status: "user updated", user: update})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

router.route("/delete/:id").delete(async (req, res)=>{
    let userId = req.params.id;

    await OnlineStore.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "user deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delet user", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res)=>{
    let userId = req.params.id;
    const user = await OnlineStore.findById(userId).then((onlinestore)=>{
        res.status(200).send({status: "user fetched", onlinestore})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message})
    });
})

module.exports = router;