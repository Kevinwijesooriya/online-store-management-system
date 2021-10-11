const router = require('express').Router();
let Order = require('../models/Order');


router.route('/add').post((req, res) => {
  const userID = req.body.userID;
  const userName = req.body.userName;
  const bankName = req.body.bankName;
  const amount = Number(req.body.amount);
  const phone = req.body.phone;
  const itemName = req.body.itemName;
  const itemImage = req.body.itemImage;
  const receiptNumber = req.body.receiptNumber;
  const email = req.body.email;
  const qty = Number(req.body.qty);
  const itemPrice = Number(req.body.itemPrice);
  const courierService = req.body.courierService;
  const address = req.body.address ;
  const orderStatus = req.body.orderStatus;

  const newOrder = new Order({
    userID ,
    userName,
    bankName ,
    amount,
    phone,
    itemName,
    itemImage,
    receiptNumber,
    email,
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
      //order.itemName = req.body.itemName ;
      //order.itemImage = req.body.itemImage ;
      //order.orderDate = req.body.orderDate ;
      order.address = req.body.address ;
      order.save()
        .then(() => res.json('Order updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/user/:userID").get(async (req, res) => {
  let userID= req.params.userID;
  const user = await Order.find({userID})
    .then((order) => {
      // res.status(200).send({status: "Order fetched", order})
      res.json(order)
    }).catch((err) => {
      console.log(err.message);
      res.status(500).send({status: "Error with get Orders", error: err.message});
  })
})

router.route("/admin/:orderStatus").get(async (req, res) => {
  let orderStatus = req.params.orderStatus;
  const user = await Order.find({orderStatus})
    .then((order) => {
      // res.status(200).send({status: "Order fetched", order})
      res.json(order)
    }).catch((err) => {
      console.log(err.message);
      res.status(500).send({status: "Error with get Orders", error: err.message});
  })
})

router.route('/admin/confirm/:id').post((req, res) => {
  Order.findById(req.params.id)
    .then(order => {
      //order.itemName = req.body.itemName ;
      //order.itemImage = req.body.itemImage ;
      //order.orderDate = req.body.orderDate ;
      //order.address = req.body.address ;
      order.orderStatus = req.body.orderStatus ;
      order.save()
        .then(() => res.json('Order updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
 