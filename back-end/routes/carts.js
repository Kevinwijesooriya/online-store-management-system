const router = require("express").Router();
let Cart = require("../models/cart");

router.route("/add").post((req,res)=>{
    const customerID = req.body.customerID;
    const productID = req.body.productID;
    const price = Number(req.body.price);
    const quantity = Number(req.body.quantity);

    const newCart = new Cart({
        customerID,
        productID,
        price,
        quantity
    })

    newCart.save().then(()=>{
        res.json("Details Added")
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/").get((req,res)=>{

    Cart.find().then((cart)=>{
        res.json(cart)
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/update/:id").put(async (req, res)=>{
    let userId = req.params.id;
    const  {customerID, productID, price, quantity} = req.body;

    const updateCart = {
        customerID,
        productID,
        price,
        quantity
    }
    const update = await Cart.findByIdAndUpdate(userId, updateCart).then(()=>{
        res.status(200).send({status: "user updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

router.route("/delete/:id").delete(async (req, res)=>{
    let userId = req.params.id;

    await Cart.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "user deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete cart", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res)=>{
    let userId = req.params.id;
    const user = await Cart.findById(userId).then((cart)=>{
        res.status(200).send({status: "cart fetched", cart})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get cart", error: err.message})
    });
})

module.exports = router;