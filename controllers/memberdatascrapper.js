const Member = require("../model/member");
var DOMParser = require('xmldom').DOMParser;
var parser = new DOMParser();

const getMembernickname = (doc) =>{
    try{
        const nickname = doc.getElementsByClassName("nickname")[0].textContent.trim();
        return {haserror : false , data : nickname};
    }catch(err){
        console.log(err);
        return {haserror : true , data : err};
    }
}
const getMemberengname = (doc) =>{
    try{
        const name = doc.getElementsByClassName("name mb-2")[0].textContent.trim();
        return {haserror : false , data : name};
    }catch(err){
        console.log(err);
        return {haserror : true , data : err};
    }
}

const getMemberthainame = (doc) =>{
    try{
        const name = doc.getElementsByClassName("name")[0].textContent.trim();
        return {haserror : false , data : name};
    }catch(err){
        console.log(err);
        return {haserror : true , data : err};
    }
}
const getMemberimageurl = (doc) =>{
    try{
        const url = doc.getElementsByClassName("profile-cover")[0].getAttribute("style").trim();
        const imageurl = url.slice(23,url.length-2);
        return {haserror : false , data : imageurl}
    }catch(err){
        console.log(err);
        return {haserror : true , data : err};
    }
}

const getMemberteaminfo = (doc) =>{
    try{
        const teaminfo = doc.getElementsByClassName("info font-weight-normal pt-2 pb-2")[0].textContent.trim();
        return {haserror : false , data : teaminfo}
    }catch(err){
        console.log(err);
        return {haserror : true , data : err};
    }
}
const getMemberdateofbirth = (doc) =>{
    try{
        const dateofbirth= doc.getElementsByClassName("col-7 col-md-6 topic")[0].textContent.trim();
        return {haserror : false , data : dateofbirth}
    }catch(err){
        console.log(err);
        return {haserror : true , data : err};
    }
}

const getMemberHeight = (doc) =>{
    try{
        const height= doc.getElementsByClassName("col-7 col-md-6 topic")[1].textContent.trim();
        return {haserror : false , data : height}
    }catch(err){
        console.log(err);
        return {haserror : true , data : err};
    }
}

const getMemberProvince = (doc) =>{
    try{
        const province = doc.getElementsByClassName("col-7 col-md-6 topic")[2].textContent.trim();
        return {haserror : false , data : province}
    }catch(err){
        console.log(err);
        return {haserror : true , data : err};
    }
}

const getMemberBloodgroup = (doc) =>{
    try{
        const bloodgroup = doc.getElementsByClassName("col-7 col-md-6 topic")[4].textContent.trim();
        return {haserror : false , data : bloodgroup}
    }catch(err){
        console.log(err);
        return {haserror : true , data : err};
    }
}
const addMemberinfo = async (memberdata) =>{
    const doc =  parser.parseFromString(memberdata,'text/html');
    const nicknameresponse = getMembernickname(doc);
    const thainameresponse = getMemberthainame(doc);
    const engnameresponse = getMemberengname(doc);
    const imageurlresponse = getMemberimageurl(doc);
    const teaminforesponse = getMemberteaminfo(doc);
    const dateofbirthresponse = getMemberdateofbirth(doc);
    const heightresponse = getMemberHeight(doc);
    const provinceresponse = getMemberProvince(doc);
    const bloodgroupresponse = getMemberBloodgroup(doc);
    if(nicknameresponse.error || thainameresponse.error || thainameresponse.error || engnameresponse.error || imageurlresponse.error || teaminforesponse.error || dateofbirthresponse.error || heightresponse.error || provinceresponse.error || bloodgroupresponse.error){
        return {haserror : true , message : "Member data error"}
    }else{
        const engname = engnameresponse.data;
        const member = await Member.findOne({engname});
        if(! member){
            const newMember = await Member.create({
                nickname : nicknameresponse.data,
                thainame : thainameresponse.data,
                engname : engnameresponse.data,
                imageurl : imageurlresponse.data,
                teaminfo : teaminforesponse.data,
                dateofbirth  : dateofbirthresponse.data,
                height : heightresponse.data,
                province : provinceresponse.data,
                bloodgroup : bloodgroupresponse.data,
            });
            const newMemberjson = JSON.stringify(newMember);
            return {haserror : false , message : "member created" , data : newMemberjson };
        }else{
            return {haserror : true , message : "member already existed"};
        }
    }
}

module.exports = {addMemberinfo};