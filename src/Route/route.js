const express = require("express")
const router = express.Router();

const{registerUser} = require("../controller/usercontroller")

router.post ("/registeruser",registerUser)

module.exports = router;
