const mongoose = require("mongoose");


const DoctorsSchema = new mongoose.Schema(
    {
   
        name:String,
        email:String,
        qualification:String,
        specialisation:String

    },
    {
        collection:"doctors"
    });

// mongoose.model("healthdetails",HealthDetailsSchema);

module.exports = mongoose.model("doctors",DoctorsSchema);