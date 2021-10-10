const router = require("express").Router();
let IssueItem = require("../models/IssueItem");

router.route("/issue").post((req,res)=>{

    const product_name = req.body.product_name;
    const model_number = req.body.model_number;
    const issue_by = req.body.issue_by;
    const quantity = Number(req.body.quantity);
    const date = Date.parse(req.body.date);

    const newIssueItem = new IssueItem({

        product_name,
        model_number,
        issue_by,
        quantity,
        date
    })

    newIssueItem.save().then(()=>{
        res.json("Successfully Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    IssueItem.find().then((issueitems)=>{
        res.json(issueitems)
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/update/:id").put(async(req,res)=>{
    
    let issueitemId = req.params.id;
    const{product_name, model_number, issue_by, quantity, date} = req.body;

    const updateIssueItem = {

        product_name,
        model_number,
        issue_by,
        quantity,
        date

    }

    const update = await IssueItem.findByIdAndUpdate(issueitemId, updateIssueItem).then(()=>{
        res.status(200).send({status: "Successfully Updated", issueitem: updateIssueItem})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

router.route("/delete/:id").delete(async(req,res)=>{
    let issueitemId = req.params.id;
    
    await IssueItem.findByIdAndDelete(issueitemId).then(()=>{
        res.status(200).send({status: "Successfully deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting data", error: err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let issueitemId = req.params.id;
    const issueitem = await IssueItem.findById(issueitemId).then((issueitem)=>{
        res.status(200).send({status: "Item Issue fetched", issueitem})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error", error: err.message});
    })
}) 

module.exports = router;