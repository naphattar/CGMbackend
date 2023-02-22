const axios = require("axios");
const dotenv = require("dotenv");
const { addMemberinfo } = require("./datascrapper");

dotenv.config();

const apiurl = `${process.env.apiurl}`;

const getMemberbyname = async(req,res) =>{
    const name = req.params.membername;
    return axios.get(apiurl + name)
    .then((response) =>{
        res.status(201).send(response.data);
        addMemberinfo(response.data);
    })
    .catch((err) =>{
        console.log(err);
    })
};

module.exports = {
    getMemberbyname
};

