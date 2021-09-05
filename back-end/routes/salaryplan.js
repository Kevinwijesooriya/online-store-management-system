const router = require("express").Router();
let salaryplan = require("../models/salaryplan");

router.route("/add").post((req, res) => {

    const { role_name, salary, date } = req.body;

    const newSalaryplan = new salaryplan({
        role_name,
        salary,
        date
    })

    newSalaryplan.save().then(() => {
        res.json("Salary plan added")
    }).catch((err) => {
        console.log(err);
    })

})
router.route("/").get((req, res) => {
    salaryplan.find()
        .then((salaryplan) => { res.json(salaryplan) }).catch((err) => {
            console.log(err)
        })
})

router.route("/update/:id").put(async (req, res) => {
    let salaryplanID = req.params.id;
    const { month, monthly_income, monthly_expences, monthly_profit, date } = req.body;

    const updateSalaryplan = {
        role_name,
        salary,
        date
    }

    const update = await salaryplan.findByIdAndUpdate(salaryplanID, updateSalaryplan).then(() => {
        res.status(200).send({ status: "salaryplan updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with the update", error: err.message });
    })


})


router.route("/delete/:id").delete(async (req, res) => {
    let salaryplanID = req.params.id;
    await salaryplan.findByIdAndDelete(salaryplanID).then(() => {
        res.status(200).send({ status: "Salary Plan deleted" })
    }).catch((err) => {
        console.log(err.message)
        res.status(500).send({ status: "Error with the delete", error: err.message });
    })


})

router.route("/get/:id").get(async (req, res) => {
    let salaryplanID = req.params.id;
    await salaryplan.findById(salaryplanID).then((salaryplan) => {
        res.status(200).send({ status: "Salary Plan fetched", salaryplan })
    }).catch(() => {
        console.log(err.message)
        res.status(500).send({ status: "Error with the salary plan fetch", error: err.message });
    })
})

module.exports = router;