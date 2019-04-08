const express = require("express");
const router = express.Router();

// const User = require("../../models/User");

const userController = require("../../controller/users");

// @route GET api/users/test
// @description tests users route
// @access Public
router.get("/test", userController.doTest);

// @route GET api/users/register
// @description Register user
// @access Public
router.post("/register", userController.registerNewUser);

module.exports = router;
