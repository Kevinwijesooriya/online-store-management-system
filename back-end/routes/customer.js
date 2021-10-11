const express = require("express");
const { logcustomer , customer , updateUserProfile, allcustomer,deleteCustomer,updateCustomer,oneCustomer} = require("../controller/customerLogin"); 
  const {protect} = require("../middlewares/authmiddleware");
const router = express.Router();

router.route("/").post(customer);
router.route("/login").post(logcustomer);
router.route("/profile").post(protect,updateUserProfile);
router.route("/list").get(allcustomer);
router.route("/:id").get(oneCustomer);
router.route("/:id").delete(deleteCustomer);
router.route("/:id").put(updateCustomer);



module.exports = router;