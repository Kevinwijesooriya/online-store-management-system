const express = require("express");
const {admin , logadmin, alladmin,updateAdmin,deleteAdmin,oneAdmin} = require("../controller/admincontrol");
const router = express.Router();

router.route("/").post(admin);
router.route("/login").post(logadmin);
router.route("/list").get(alladmin);
router.route("one/:id").get(oneAdmin);
router.route("update/:id").post(updateAdmin);
router.route("delete/:id").delete(deleteAdmin);

 


module.exports = router;