// server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.set('trust proxy',true);
var cors=require('cors')
app.use(cors())
const port = 3000;
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
mongoose.connect(process.env.m_url).then(()=>{console.log("sucessful")}).catch((err)=>{console.log(err)});
const user= mongoose.Schema({
    ip: {
        type: String,
        required: true
    },
    Latitude: {
        type: String,
        required: true
    },
    Longitude: {
        type: String,
        required: true
    }
   

  

})
var model=mongoose.model('ips',user);
app.use(express.static('public'));
app.get("/damn",async (req,res)=>{

console.log(req.ip)
console.log(req.query.Latitude);
console.log(req.query.Longitude);
var obj={
    ip:req.ip,
    Latitude:req.query.Latitude,
    Longitude:req.query.Longitude

    }
    const locat = new model(obj);
    const ans= await locat.save();

})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
