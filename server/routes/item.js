const express = require('express');
const router = express.Router();
const { start,submit,addItem } = require("../controllers/itemControllers");
const isLogin = require("../middleware/isLogin");

router.route("/start").get(isLogin,start);
router.route("/submit").post(isLogin,submit);
router.route("/addItem").post(addItem);
module.exports = router;