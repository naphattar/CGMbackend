const axios = require("axios");
const dotenv = require("dotenv");
const { addMemberinfo } = require("./memberdatascrapper");

dotenv.config();

const apiurl = `${process.env.apiurl}`;

const getMemberbyname = async(req,res) =>{
    const name = req.params.membername;
    return axios.get(apiurl + name)
    .then(async (response) =>{
        const addmemberresponse = await addMemberinfo(response.data);
        if(addmemberresponse.haserror){
            res.status(401).send(addmemberresponse.message);
        }else{
            res.status(200).send(addmemberresponse.message);
        }
    })
    .catch((err) =>{
        console.log(err);
    })
};

module.exports = {
    getMemberbyname
};

