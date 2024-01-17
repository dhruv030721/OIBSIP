const express = require("express")
const router = express.Router();

const { signup, login } = require("../controller/Auth")
const { adminAuth } = require("../controller/AdminAuth")
const { AddItem } = require("../controller/AddItem")
const { GetItem } = require("../controller/GetItem")
const { AddIngredients } = require("../controller/AddIngredients")
const { GetIngredients } = require("../controller/GetIngredients")


router.post("/signup", signup);
router.post("/login", login);
router.post("/admin/auth", adminAuth);
router.post("/additem",AddItem);
router.get("/getitems",GetItem);
router.post("/addingredientitem",AddIngredients);
router.get("/getingredients",GetIngredients);

module.exports = router;


