const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");
// require("./db/userdetails");
mongoose.set('strictQuery', false);
const dbUrl = "mongodb://127.0.0.1/clinic"
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(dbUrl, connectionParams)
    .then(() => {
        console.info("Connected to DB")
    })
    .catch((e) => {
        console.log("Error", e);
    });
// const bcrypt = require("bcryptjs");

// const ChannelModel = require('./models/channel');

// const jwt = require("jsonwebtoken");
// const JWT_SECRET = "hdskjfbfjbdskjfbsdkgmj90dsfkjbfjdkdnfkjskfhdfsjk9()jkfl";

const app = express()
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
const PORT = 4000;

const User = require("./db/userdetails");
const HealthSchema = require("./db/healthdetails");
const DoctorsSchema = require("./db/doctors");
const AppointmentsSchema = require("./db/appointments");


app.post("/register",async(req,res)=>{
    let user =  new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    res.send(result);

})
app.post("/appointments",async(req,res)=>{
    let user =  new AppointmentsSchema(req.body);
    let result = await user.save();
    result = result.toObject();
  
    res.send(result);

})
app.post("/submit",async(req,res)=>{
    let user =  new HealthSchema(req.body);
    let result = await user.save();
    result = result.toObject();
  
    res.send(result);

})




app.post("/login",async(req,res)=>{
    // const {usn,password} = req.body;
    // console.log(req.body.usn);
    // console.log(req.body);
    
    if(req.body.password && req.body.usn){
        let user  = await User.findOne(req.body).select("-password");
        if(user)
        {
            // const user  = await User.findOne(req.body.password)
            res.send(user);
        }else{
               
                res.send({result:"No user found"})
            }
           
    } else{
        res.send({result:'Invalid user'})
    }
   
})



// app.post("/login",async(req,res)=>{
//     const {usn,password} = req.body;
//     const user = await User.findOne({usn,password});
//     // console.log(user)
//     if(!user){
//         res.json({error:"User Not found"});
//     }1
//     // console.log(password);
//     //     console.log(user.password);
//     if(user.password===password){
//         // return res.status(201).json({
//         //     success:true, 
//         //     message:"Loginned scuesfully"
//         // })
//         let result = user.save();
//         // result = result.toObject();
//         res.send(result);

//     }
    
//     res.json({status:"error",error:"Invalid Password"})
// });


app.post("/add-health",async(req,res)=>{
    HealthSchema.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    });
    // let result = await product.save();
    // res.send(result);
})


// studentRoute.route('/add-health').post((req, res, next) => {
//     studentSchema.create(req.body, (error, data) => {
//         if(error){
//             return next(error)
//         }else{
//             res.json(data)
//         }
//     })
// })


app.get('/gethealthdetails',async (req,res)=>{
    let results=await HealthSchema.find();
    res.send(results);
})



app.get('/doctors',async (req,res)=>{
    let result=await DoctorsSchema.find();
    res.send(result);
})
app.listen(PORT, () => {
    console.log(`Server started:${PORT}`);
});





