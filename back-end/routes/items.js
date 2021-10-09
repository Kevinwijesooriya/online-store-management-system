const router = require("express").Router();
const multer = require('multer');

let Item = require("../models/item");


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./../front-end/public/images/");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({storage: storage});

router.route("/add").post(upload.single("itemimage"),(req,res)=>{

    const itemname = req.body.itemname;
    const itemimage = req.file.originalname;
    const itemcategory = req.body.itemcategory;
    const itembrand = req.body.itembrand;
    const itemcolor = req.body.itemcolor;
    const itemprice = Number(req.body.itemprice);
    const itemqty = Number(req.body.itemqty);
    const itemdescription = req.body.itemdescription;
    let date_ob = new Date();

    const newItem = new Item({

        itemname,
        itemimage,
        itemcategory,
        itembrand,
        itemcolor,
        itemprice,
        itemqty,
        itemdescription,
        date_ob 

    })

    newItem.save().then(()=>{
        res.json("Item Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{

    Item.find().then((items)=>{
        res.json(items)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(upload.single("itemimage"),async (req,res) => {
    let userId = req.params.id;
    const {itemname, itemimage, itemcategory, itembrand, itemcolor, itemprice, itemqty, itemdescription} = req.body;
    let date_ob = new Date();

    const updateItem = {
        itemname,
        itemimage,
        itemcategory,
        itembrand,
        itemcolor,
        itemprice,
        itemqty,
        itemdescription,
        date_ob 
       
    }

    const update = await Item.findByIdAndUpdate(userId, updateItem).then(() => {
        res.status(200).send({status: "Item successfully updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Item Update Unsuccessful",error: err.message});
    })
})

router.route("/delete/:id").delete(upload.single("itemimage"),async (req,res) => {
    let userId =req.params.id;

    await Item.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "Item successfully deleted"})
    }).catch((err) => {
        console.log(err.mesege);
    res.status(500).send({status: "Item delete Unsuccessful",error: err.message});
    })
})

router.route("/get/:id").get(upload.single("itemimage"),async (req,res) => {
    let userId = req.params.id;
    const item = await Item.findById(userId)
    .then((item) => {
        res.status(200).send({status: "Item Details",item})
    }).catch(() => {
        console.log(err.mesege);
    res.status(500).send({status: "Error item details",error: err.message});
    })
})

module.exports = router;