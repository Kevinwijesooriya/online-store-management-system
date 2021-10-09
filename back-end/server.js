 const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
//const { notFound, errorHandler} = require("./middlewares/errormiddleware");

require("dotenv").config();
const app = express();

//const PORT = process.env.PORT || 8070;
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


const URL = process.env.MONGOBD_URL;

mongoose.connect(URL,{
    //useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    //useFindAndModify:false
})

//app.use(notFound);
//app.use(errorHandler);



const connction = mongoose.connection;
connction.once("open", () =>{
    console.log("Mongodb Connection success");
})
app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
})

const personRouter= require("./routes/persons");
app.use("/person",personRouter);

const onlinestoreRouter = require("./routes/carts.js");
app.use("/cart",onlinestoreRouter);


const customer = require("./routes/customer.js");
app.use("/customer",customer)

const notes = require("./routes/notes.js");
app.use("/notes",notes)

const admin = require("./routes/admin.js");
app.use("/admin",admin)


const budgetSchema = require("./routes/budget.js");
app.use("/budget",budgetSchema)


const itemRouter = require("./routes/items.js");
app.use("/item",itemRouter);

const inquiryRouter = require("./routes/inquirys.js");
app.use("/inquiry",inquiryRouter);

const feedbackRouter = require("./routes/feedbacks.js");
app.use("/feedback",feedbackRouter);

const salaryplanSchema = require("./routes/salaryplan.js");
app.use("/salaryplan",salaryplanSchema)

const deliveryRouter = require("./routes/deliveries.js");
app.use("/delivery",deliveryRouter);

const orderRouter = require("./routes/orders.js");
app.use("/order" , orderRouter);

const productRouter = require("./routes/Products.js");
app.use("/product", productRouter);

const productCartRouter = require("./routes/productRoutes.js");
app.use("/productCart", productCartRouter);

const issueitemRouter = require("./routes/IssueItems.js");
app.use("/issueitem", issueitemRouter);

const instockRouter = require("./routes/InStock.js");
app.use("/instock", instockRouter);

const courierRouter = require("./routes/couriers.js");
app.use("/courier",courierRouter);

const adminfeedbackRouter = require("./routes/Adminfeedbacks.js");
app.use("/adminfeedback",adminfeedbackRouter);
