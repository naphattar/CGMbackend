const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./configs/database");
const router = require("./routes/memberouter");

dotenv.config();
db.connect();

const app = express();

app.use(express.json());
const corsOptions = {
    credentials: true,
};
app.use(cors(corsOptions));

app.use("/member",router);


module.exports = app;
