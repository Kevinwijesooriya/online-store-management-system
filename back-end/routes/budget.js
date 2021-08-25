const router = require("express").Router();
let budget = require("../models/budget");

router.route("/add").post((req, res) => {

    const { month, monthly_income, monthly_expences, monthly_profit, date } = req.body;

    const newBudget = new budget({
        month,
        monthly_income,
        monthly_expences,
        monthly_profit,
        date
    })

    newBudget.save().then(() => {
        res.json("Budget added")
    }).catch((err) => {
        console.log(err);
    })

})
router.route("/").get((req, res) => {
    budget.find()
        .then((budget) => { res.json(budget) }).catch((err) => {
            console.log(err)
        })
})

router.route("/update/:id").put(async (req, res) => {
    let budgetID = req.params.id;
    const { month, monthly_income, monthly_expences, monthly_profit, date } = req.body;

    const updateBudget = {
        month,
        monthly_income,
        monthly_expences,
        monthly_profit,
        date
    }

    const update = await budget.findByIdAndUpdate(budgetID, updateBudget).then(() => {
        res.status(200).send({ status: "budget updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with the update", error: err.message });
    })


})


router.route("/delete/:id").delete(async (req, res) => {
    let budgetID = req.params.id;
    await budget.findByIdAndDelete(budgetID).then(() => {
        res.status(200).send({ status: "budget deleted" })
    }).catch((err) => {
        console.log(err.message)
        res.status(500).send({ status: "Error with the delete", error: err.message });
    })


})

router.route("/get/:id").get(async (req, res) => {
    let budgetID = req.params.id;
    await budget.findById(budgetID).then((budget) => {
        res.status(200).send({ status: "budget fetched", budget })
    }).catch(() => {
        console.log(err.message)
        res.status(500).send({ status: "Error with the budget fetch", error: err.message });
    })
})

module.exports = router;