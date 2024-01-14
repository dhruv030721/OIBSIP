const express = require("express")
const router = express.Router();

const { signup, login } = require("../controller/Auth")
const { adminAuth } = require("../controller/AdminAuth")
const { AddItem } = require("../controller/AddItem")
const { GetItem } = require("../controller/GetItem")


router.post("/signup", signup);
router.post("/login", login);
router.post("/admin/auth", adminAuth);
router.post("/additem",AddItem);
router.get("/getitems",GetItem)

module.exports = router;


