const router = require("express").Router();
let Feedback = require("../models/Feedback");

router.route("/add").post((req,res)=>{
   const custom_ID = req.body.custom_ID;
   const custom_name = req.body.custom_name;
   const item_name= req.body.item_name;
   const itemcode = req.body.itemcode;
   const rate = Number(req.body.rate);
   const comment = req.body.comment;
   let date_ob = new Date();

   const newFeedback = new Feedback({
    custom_ID,
    item_name,
    itemcode,
    custom_name,
    rate,
    comment,
    date_ob 
   })

   newFeedback.save().then(()=>{
      res.json("feedback Added")
   }).catch((err)=>{
      console.log(err);
   })
})

router.route("/").get((req,res)=>{
    Feedback.find().then((feedbacks)=>{
      res.json(feedbacks)
    }).catch((err)=>{
      console.log(err)
    })
})

router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const {custom_ID,custom_name,item_name, itemcode,rate, comment} = req.body;
  let date_ob = new Date();
  const updateFeedback = {
    custom_ID,
    custom_name,
    item_name,
    itemcode,
    rate,
    comment,
    date_ob 
  }

  const update = await Feedback.findByIdAndUpdate(userId, updateFeedback)
  .then((Feedback) => {
    res.status(200).send({status: "User updated",Feedback})
  }).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
  })
})

router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await Feedback.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({status: "User deleted"});
    }).catch((errr) => {
      console.log(err.message);
      res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;
  const user = await Feedback.findById(userId)
    .then((feedback) => {
      res.status(200).send({status: "User fetched", feedback})
    }).catch((err) => {
      console.log(err.message);
      res.status(500).send({status: "Error with get user", error: err.message});
  })
})


router.route("/got/:item_name").get(async (req, res) => {
  let item_name= req.params.item_name;
  const user = await Feedback.find({item_name})
    .then((feedback) => {
      // res.status(200).send({status: "User fetched", feedback})
      res.json(feedback)
    }).catch((err) => {
      console.log(err.message);
      res.status(500).send({status: "Error with get user", error: err.message});
  })
})
module.exports = router;