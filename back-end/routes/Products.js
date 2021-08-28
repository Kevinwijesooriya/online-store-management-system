const router = require("express").Router();
let Product = require("../models/Product");

router.route("/add").post((req,res)=>{

    const product_type = req.body.product_type;
    const brand_name = req.body.brand_name;
    const model_number = req.body.model_number;
    const model_name = req.body.model_name;
    const specifications = req.body.specifications;
    const supplier = req.body.supplier;
    const no_of_items = Number(req.body.no_of_items);
    const date = Date(req.body.date);

    const newProduct = new Product({

        product_type,
        brand_name,
        model_number,
        model_name,
        specifications,
        supplier,
        no_of_items,
        date
    })

    newProduct.save().then(()=>{
        res.json("Product Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    Product.find().then((products)=>{
        res.json(products)
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/update/:id").put(async(req,res)=>{
    
    let productId = req.params.id;
    const{product_type, brand_name, model_number, model_name, specifications, supplier, no_of_items, date} = req.body;

    const updateProduct = {

        product_type,
        brand_name,
        model_number,
        model_name,
        specifications,
        supplier,
        no_of_items,
        date

    }

    const update = await Product.findByIdAndUpdate(productId, updateProduct).then(()=>{
        res.status(200).send({status: "Product Updated", product: updateProduct})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

router.route("/delete/:id").delete(async(req,res)=>{
    let productId = req.params.id;
    
    await Product.findByIdAndDelete(productId).then(()=>{
        res.status(200).send({status: "Product deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete product", error: err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let productId = req.params.id;
    const product = await Product.findById(productId).then((product)=>{
        res.status(200).send({status: "Product fetched", product})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get product", error: err.message});
    })
})

module.exports = router;