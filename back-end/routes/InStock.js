const router = require("express").Router();
const InStock = require("../models/InStock");

router.route("/").get((req, res) => {

    InStock.find().then((stock) => {
        res.json(stock)
    }).catch((err) => {
        console.log(err)
    })

})
module.exports = router;