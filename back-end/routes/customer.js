const express = require("express");
const { logcustomer , customer ,updateUserProfile } = require("../controller/customerLogin");
//const {protect} = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").post(customer);
router.route("/login").post(logcustomer);
//router.route("/profile").post(protect,updateUserProfile);


module.exports = router;