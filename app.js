const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./configs/database");
const Member = require("./model/member");
const { getMemberbyname } = require("./controllers/membercontroller");

dotenv.config();
db.connect();

const app = express();

app.use(express.json());
const corsOptions = {
    credentials: true,
};
app.use(cors(corsOptions));

app.get("/:membername",getMemberbyname);

module.exports = app;
