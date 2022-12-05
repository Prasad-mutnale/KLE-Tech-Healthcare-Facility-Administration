const mongoose = require("mongoose");


const HealthDetailsSchema = new mongoose.Schema(
    {
        usn:String,
        name:String,
        age:String,
        gender:String,
        disease:Object
    },
    {
        collection:"healthdetails"
    });

// mongoose.model("healthdetails",HealthDetailsSchema);

module.exports = mongoose.model("healthdetails",HealthDetailsSchema);
