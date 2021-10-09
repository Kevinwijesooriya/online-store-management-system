const router = require('express').Router();
let Order = require('../models/Order');


router.route('/add').post((req, res) => {
  const userName = req.body.userName;
  const bankName = req.body.bankName;
  const amount = Number(req.body.amount);
  const phone = req.body.phone;
  const itemName = req.body.itemName;
  const qty = Number(req.body.qty);
  const itemPrice = Number(req.body.itemPrice);
  const courierService = req.body.courierService;
  const address = req.body.address ;
  const orderStatus = req.body.orderStatus;

  const newOrder = new Order({
    userName ,
    bankName ,
    amount,
    phone,
    itemName,
    qty,
    itemPrice,
    courierService,
    address,
    orderStatus,
  });


  newOrder.save()
  .then(() => res.json('Order added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


//Request get all orders
{/*
router.route('/').get((req, res) => {
  Order.find()
    .then((orders) => res.json(orders))
    .catch(err => res.status(400).json('Error: ' + err));
});

*/}

router.route('/').get((req , res) => {
  Order.find().exec((err , orders) =>{
    if(err){
      return res.status(400).json({
        error:err
      });
    }
    return res.status(200).json({
      success: true,
      existingOrders:orders
    });
  });
});

router.route("/confirmOrder").get((req , res) => {
  Order.find().then((order) => {
      res.json(order)
  }).catch((err) =>{
      console.log(err)
  })
}) 


router.route('/:id').get((req, res) => {
  Order.findById(req.params.id)
    .then(order => res.json(order))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Order.findByIdAndDelete(req.params.id)
    .then(() => res.json('Order deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Order.findById(req.params.id)
    .then(order => {
      order.itemName = req.body.itemName ;
      order.orderDate = Date.parse(req.body.orderDate) ;
      order.address = req.body.address ;
      order.save()
        .then(() => res.json('Order updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
 