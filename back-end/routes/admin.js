const express = require("express");
const {admin , logadmin, alladmin,updateAdmin,deleteAdmin,oneAdmin} = require("../controller/admincontrol");
const router = express.Router();

router.route("/").post(admin);
router.route("/login").post(logadmin);
router.route("/list").get(alladmin);
router.route("/:id").get(oneAdmin);
 router.route("/:id").put(updateAdmin);
 router.route("/:id").delete(deleteAdmin);

 


module.exports = router;