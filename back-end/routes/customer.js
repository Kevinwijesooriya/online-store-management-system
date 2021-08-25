const router = require("express").Router();

let customer = require("../models/customer"); 

router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const email = req.body.email;
    const phone = Number(req.body.phone);
    const gender = req.body.gender;
    const loginType = req.body.loginType;
    const username = req.body.username;
    const password = req.body.password;
    
const newCustomer = new customer({

    name,
    email,
    phone,
    gender,
    loginType,
    username,
    password

})

 newCustomer.save().then(()=>{
     res.json("Customer added")
 }).catch((err)=>{
     console.log(err);
 })

})

router.route("/").get((req,res)=>{
    customer.find().then((customer)=>{
    res.json(customer)
    }).catch((err)=>{
        console.log(err)
    })
})


router.route("/update/:id").put(async(req,res) => {

    let userId = req.params.id;
    const {name,email,phone,gender,loginType,username,password}  = req.body;

    const updateCustomer = {
     name,
     email,
     phone,
     gender,
     loginType,
     username,
     password

    }

    const update = await customer.findByIdAndUpdate(userId,updateCustomer).then(()=>{
        res.status (200).send({status:"user updated"})

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Erroe with updating data" , error : err.message});

      

    }) 
   
})



       router.route("/delete/:id").delete(async (req,res) => {
           let userId = req.params.id;

           await customer.findByIdAndDelete(userId)
           .then(() => {
               res.status(200).send({status : "user deleted"});
           }).catch((err) => {
               console.log(err.message);
               res.status(500).send({status : "Error with delete user", error : err.message});
               
           })
       })


       router.route("/get/:id").get(async (req,res) =>{
           let userId = req.params.id;
      const user = await customer.findById(userId)
           .then((customer) =>{
               res.status(200).send({status : "User fetched",customer })
           }).catch((err) => {
               console.log(err.message);
               res.status(500).send({status : "Error with get user", error: err.message});
           })
       })
        
  


module.exports = router;