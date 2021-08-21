const router = require("express").Router();
let Person = require("../models/person");

router.route("/add").post((req,res)=>{
    const Name = req.body.Name;
    const ID = req.body.ID;
    const Age = Number(req.body.Age);

    const newPerson = new Person({
        Name,
        ID,
        Age
    })

    newPerson.save().then( ()=> {
      res.json("Person added")
    }).catch((err)=>{
        console.log(err);
    })

})
router.route("/").get((req,res)=>{
    Person.find()
        .then((persons) => {res.json(persons)}).catch((err)=>{
            console.log(err)
        })
})

router.route("/update/:personid").put(async(req,res)=>{
    let personID = req.params.personid;
    const{Name, ID, Age}= req.body;

    const updatePerson = {
        Name,
        ID,
        Age
    }

    const update = await Person.findByIdAndUpdate(personID,updatePerson).then(()=>{
        res.status(200).send({status:"person upadated"})
    }).catch((err)=>{
            console.log(err);
            res.status(500).send({status:"Error with the update",error:err.message});
    })
    
    
})

/*npx create-react-app front-end
cd front-end
npm start*/
router.route("/delete/:id").delete(async(req,res)=>{
    let personID = req.params.id;
    await Person.findByIdAndDelete(personID).then(()=>{
        res.status(200).send({status:"person deleted"})}).catch((err)=>{
            console.log(err.message)
            res.status(500).send({status:"Error with the delete",error:err.message});
    })
    

})

router.route("/get/:personid").get(async(req,res)=>{
    let personID = req.params.personid;
    await Person.findById(personID).then((person)=>{
        res.status(200).send({status:"person fetched",person})
    }).catch(()=>{
        console.log(err.message)
            res.status(500).send({status:"Error with the person fetch",error:err.message});
    })
})
 
module.exports = router ;