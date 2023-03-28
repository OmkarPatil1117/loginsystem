const mongoose = require("mongoose");
//in SQL there is predifine schema here we can define our own Schema;
const user = new mongoose.Schema({
    firstName : {
        type : String,
        require : true
    },
    password :{
        type : String,
        require : true
    }
})

const projectModel = mongoose.model("UserDetaile", user)
module.exports = projectModel