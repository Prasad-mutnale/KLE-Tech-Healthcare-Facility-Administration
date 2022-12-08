const mongoose = require("mongoose");


const appointmentsSchema = new mongoose.Schema(
    {
   
        Dname:String,
        email:String,
        Sname:String
      

    },
    {
        collection:"appointments"
    });

// mongoose.model("healthdetails",HealthDetailsSchema);

module.exports = mongoose.model("appointments",appointmentsSchema);