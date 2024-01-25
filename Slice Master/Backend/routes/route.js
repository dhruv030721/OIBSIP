const express = require("express")
const router = express.Router();

const { signup, login } = require("../controller/Auth")
const { adminAuth } = require("../controller/AdminAuth")
const { AddItem } = require("../controller/AddItem")
const { GetItem } = require("../controller/GetItem")
const { AddIngredients } = require("../controller/AddIngredients")
const { GetIngredients } = require("../controller/GetIngredients")
const { Payment } = require("../controller/Payment")
const { Order } = require("../controller/Order")
const { ForgotPassword, otpVerification, updatePassword } = require("../controller/ForgotPassword")
const { GetOrder } = require("../controller/GetOrder")
const {GetOneItem} = require("../controller/GetOneItem")
const {EditItem} = require("../controller/EditItem")

router.post("/signup", signup);
router.post("/login", login);
router.post("/admin/auth", adminAuth);
router.post("/additem", AddItem);
router.get("/getitems", GetItem);
router.post("/addingredientitem", AddIngredients);
router.get("/getingredients", GetIngredients);
router.post("/payment", Payment)
router.post("/addOrder", Order)
router.post("/forgotpassword", ForgotPassword)
router.post("/otpverification", otpVerification)
router.post("/updatepassword", updatePassword)
router.get("/getorders",GetOrder)
router.get("/getoneitem/:id",GetOneItem)
router.post("/edititem",EditItem)

module.exports = router;


