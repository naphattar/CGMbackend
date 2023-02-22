const express = require("express");
const { addMemberbyname, getMemberbyname } = require("../controllers/membercontroller");
const router = express.Router();

router.get("/add/:membername",addMemberbyname);
router.get("/:membername",getMemberbyname);
module.exports = router;
