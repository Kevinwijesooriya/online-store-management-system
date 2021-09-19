const Product = require('../models/item');



const getProductById = async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);

        res.json(product);
    }catch (error){
        console.error(error);
        res.status(500)({message: "Server Error"});
    }
};

module.exports = {
    getProductById,
};