const router = require("express").Router();
let Product = require("../models/Product");
const InStock = require("../models/InStock");

router.route("/add").post((req, res) => {

    const product_name = req.body.product_name;
    const model_number = req.body.model_number;
    const category = req.body.category;
    const specifications = req.body.specifications;
    const supplier = req.body.supplier;
    const quantity = Number(req.body.quantity);
    const date = Date.parse(req.body.date);

    Product.findOne({ product_name: product_name }).exec((error, stock) => {
        if (error) res.status(400).json({ error });
        if (stock) {
            const newProduct = new Product({
                product_name,
                model_number,
                category,
                specifications,
                supplier,
                quantity,
                date
            });
            newProduct.save().then(() => {
                res.write(' * Same Model Product Added * ')
            }).catch((err) => {
                console.log(err);
            })
            InStock.findOne({ product_name: product_name }).exec((error, instock) => {
                if (error) res.status(400).json({ error });
                if (instock) {
                    const inStock = {
                        product_name: stock.product_name,
                        model_number: stock.model_number,
                        quantity: quantity + instock.quantity,
                    }
                    InStock.findByIdAndUpdate(instock._id, inStock).then(() => {
                        res.write(JSON.stringify({ status: "InStock quantity Updated", stock: inStock }))
                        res.end();
                        //res.status(200).json({ status: "InStock quantity Updated", stock: inStock })
                    }).catch((err) => {
                        console.log(err);
                        res.write(' * Error with updating quantity * ')
                        res.end();
                        //res.status(500).json({ status: "Error with updating quantity", error: err.message });
                    })

                } else {
                    const inStock = new InStock({
                        product_name: product_name,
                        model_number: model_number,
                        quantity: quantity,
                    });
                    inStock.save().then(() => {
                        res.write(' * Stock Added * ')
                        res.end();
                    }).catch((err) => {
                        console.log(err);
                    })
                }
            })

        } else {
            const newProduct = new Product({
                product_name,
                model_number,
                category,
                specifications,
                supplier,
                quantity,
                date
            });
            const inStock = new InStock({
                product_name: product_name,
                model_number: model_number,
                quantity: quantity,
            });
            newProduct.save().then(() => {
                inStock.save().then(() => {
                    res.write(' * New Stock Added * ')
                    res.write(' * Product Added * ')
                    res.end();
                }).catch((err) => {
                    console.log(err);
                })
            }).catch((err) => {
                console.log(err);
            })
        }
    })
})

router.route("/").get((req, res) => {

    Product.find().then((products) => {
        res.json(products)
    }).catch((err) => {
        console.log(err)
    })

})

router.route("/update/:id").put(async (req, res) => {

    let productId = req.params.id;
    const { product_name, model_number, category, specifications, supplier, quantity, date } = req.body;

    const updateProduct = {

        product_name,
        model_number,
        category,
        specifications,
        supplier,
        quantity,
        date

    }

    const update = await Product.findByIdAndUpdate(productId, updateProduct).then(() => {
        res.status(200).send({ status: "Item Updated", product: updateProduct })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data", error: err.message });
    })
})

router.route("/delete/:id").delete(async (req, res) => {
    let productId = req.params.id;

    await Product.findByIdAndDelete(productId).then(() => {
        res.status(200).send({ status: "Item deleted" });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with delete Item", error: err.message });
    })
})

router.route("/get/:id").get(async (req, res) => {
    let productId = req.params.id;
    const product = await Product.findById(productId).then((product) => {
        res.status(200).send({ status: "Product fetched", product })
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with get product", error: err.message });
    })
})

module.exports = router;