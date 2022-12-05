const mongoose = require("mongoose");


const UserDetailsSchema = new mongoose.Schema(
    {
        name:String,
        usn:String,
        password:String
    },
    {
        collection:"login"
    });

    module.exports = mongoose.model("login",UserDetailsSchema);
