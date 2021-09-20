const express = require("express");
const {admin , logadmin} = require("../controller/admincontrol");
const router = express.Router();

router.route("/").post(admin);
router.route("/login").post(logadmin);
 


module.exports = router;