const router = require("express").Router();
let inquiry = require("../models/inquiry");

router.route("/add").post((req,res)=>{
   const custom_ID = req.body.custom_ID;
   const custom_name = req.body.custom_name;
   const custom_address_code = Number(req.body.custom_address_code);
   const custom_streat_address = req.body.custom_streat_address;
   const custom_city= req.body.custom_city;
   const custom_province_name= req.body.custom_province_name;
   const custom_mail= req.body.custom_mail;
   const custom_contact_number = Number(req.body.custom_contact_number);
   const item_name= req.body.item_name;
   const itemcode = req.body.itemcode;
   const billnumber =req.body.billnumber;
   const type_of_inquiry = req.body.type_of_inquiry;
   const inquriy_description = req.body.inquriy_description;
   let date_ob = new Date();

   const newinquiry = new inquiry({
      custom_ID,
      custom_name,
      custom_address_code, 
      custom_streat_address,   
      custom_city,
      custom_province_name,
      custom_mail,
      custom_contact_number,
      item_name,
      itemcode,
      billnumber,
      type_of_inquiry,
      inquriy_description,
      date_ob 
   })

   newinquiry.save().then(()=>{
      res.json("inquiry Added")
   }).catch((err)=>{
      console.log(err);
   })
})

router.route("/").get((req,res)=>{
    inquiry.find().then((inquirys)=>{
      res.json(inquirys)
    }).catch((err)=>{ 
      console.log(err)
    }) 
})

router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const { custom_ID,custom_name,custom_address_code,custom_streat_address,custom_city,custom_province_name,custom_mail,custom_contact_number,item_name,itemcode, billnumber,type_of_inquiry,inquriy_description} = req.body;
  let date_ob = new Date();
  const updateinquiry = {
    custom_ID,
    custom_name,
    custom_address_code, 
    custom_streat_address,
    custom_city, 
    custom_province_name,
    custom_mail,
    custom_contact_number,
    item_name,
    itemcode,
    billnumber,
    type_of_inquiry,
    inquriy_description,
    date_ob
  }

  const update = await inquiry.findByIdAndUpdate(userId, updateinquiry)
  .then((inquiry) => {
    res.status(200).send({status: "inquiry updated",inquiry})
  }).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
  })
})

router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await inquiry.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({status: "inquiry deleted"});
    }).catch((errr) => {
      console.log(err.message);
      res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;
  const user = await inquiry.findById(userId)
    .then((inquiry) => {
      res.status(200).send({status: "inquiry fetched", inquiry})
    }).catch((err) => {
      console.log(err.message);
      res.status(500).send({status: "Error with get user", error: err.message});
  }) 
})

module.exports = router;