const Member = require("../model/member");
var DOMParser = require('xmldom').DOMParser;
var parser = new DOMParser();

const addMemberinfo = (memberdata) =>{
    const doc = parser.parseFromString(memberdata,'text/html');
    const datalist = doc.getElementsByClassName("content-body");
    console.log(datalist);
}

module.exports = {addMemberinfo};