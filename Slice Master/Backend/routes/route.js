const express = require("express")
const router = express.Router();

const { signup, login } = require("../controller/Auth")
const { adminAuth } = require("../controller/AdminAuth")
const { AddItem } = require("../controller/AddItem")


router.post("/signup", signup);
router.post("/login", login);
router.post("/admin/auth", adminAuth)
router.post("/additem",AddItem)

module.exports = router;


