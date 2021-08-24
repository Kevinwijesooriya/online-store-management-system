const router = require("express").Router();
let admin = require("../models/admin");


router.route("/add").post((req,res) =>{

    const name = req.body.name;
    const email = req.body.email;
    const phone = Number(req.body.phone);
    const gender = req.body.gender;
    const loginType = req.body.loginType;
    const section = req.body.section;
    const username = req.body.username;
    const password = req.body.password;

    const newAdmin = new admin({

        name,
        email,
        phone,
        gender,
        loginType,
        section,
        username,
        password

    })

    newAdmin.save().then(()=>{
        res.json("Admin added")
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/").get((req,res)=>{

    admin.find().then((admin)=>{
        res.json(admin)
    }).catch((err)=>{
        console.log(err)
    })

})



router.route("/update/:id").put(async (req,res)=>{
    let userId = req.params.id;
    const {name,email,phone,gender,loginType,section,username,password}  = req.body;

const UpdateAdmin = {

    
    name,
    email,
    phone,
    gender,
    loginType,
    section,
    username,
    password

}

const update = await admin.findByIdAndUpdate(userId,UpdateAdmin).then(()=>{
   
    res.status(200).send({status:"User has updated"})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error with updating date",error:err.message});
})


})



router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await admin.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"user deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleted user",error : err.message})
    })
})

router.route("/get:id").get(async(req,res)=>{
    let userId = req.params.id;
    await admin.findById(userId)
    .then((admin)=>{
        res.status(200).send({status:"user fetched",admin})
    }).catch(()=>{
        console.log(err.message); 
        res.status(500).send({status:"Error with get user",error : err.message});
    })
})



module.exports = router;