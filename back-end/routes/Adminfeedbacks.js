const router = require("express").Router();
let Adminfeedback = require("../models/Adminfeedback");

router.route("/add").post((req,res)=>{
   const admin_email = req.body.admin_email;
   const issue = req.body.issue;
   let date_ob = new Date();

   const newAdminfeedback = new Adminfeedback({
    admin_email,
    issue,
    date_ob 
   })

   newAdminfeedback.save().then(()=>{
      res.json("feedback Added")
   }).catch((err)=>{
      console.log(err);
   })
})

router.route("/").get((req,res)=>{
    Adminfeedback.find().then((adminfeedbacks)=>{
      res.json(adminfeedbacks)
    }).catch((err)=>{
      console.log(err)
    })
})

router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const {admin_email,issue} = req.body;
  let date_ob = new Date();
  const updateAdminfeedback = {
    admin_email,
    issue,
    date_ob 
  }

  const update = await Adminfeedback.findByIdAndUpdate(userId, updateAdminfeedback)
  .then((Adminfeedback) => {
    res.status(200).send({status: "Feedback updated",Adminfeedback})
  }).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
  })
})

router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await Adminfeedback.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({status: "Feedback deleted"});
    }).catch((errr) => {
      console.log(err.message);
      res.status(500).send({status: "Error with delete feedback", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;
  const user = await Adminfeedback.findById(userId)
    .then((adminfeedback) => {
      res.status(200).send({status: "Feedback fetched", adminfeedback})
    }).catch((err) => {
      console.log(err.message);
      res.status(500).send({status: "Error with get feedback", error: err.message});
  })
})

module.exports = router;