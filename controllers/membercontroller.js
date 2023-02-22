const axios = require("axios");
const dotenv = require("dotenv");
const Member = require("../model/member");
const { addMemberinfo } = require("./memberdatascrapper");

dotenv.config();

const apiurl = `${process.env.apiurl}`;

const addMemberbyname = async(req,res) =>{
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

const getMemberbyname = async (req ,res) =>{
    const name = req.params.membername;
    const member = await Member.findOne({name});
    if(member){
        res.status(200).json(member);
    }else{
        res.status(401).send({message : "This member is not existed"});
    }
}
module.exports = {
    addMemberbyname,
    getMemberbyname
};

