//Functionality or the main javascript file that is run to access everything
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const express= require("express");
const app= express();
const ejs=require('ejs');
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({encoded:true}));

app.set('view engine','ejs');
dotenv.config( {path : './config.env'});


app.use(express.json());


// ********establishing connection to database********
const DB=process.env.DATABASE;
const port=process.env.PORT
mongoose.connect(DB,{
    // useNewUrlParser: true,
    // useCreateIndex:true,
    // useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=>{
    console.log("connection to dbs successful!");
}).catch((err)=>{
    console.log(err);
})
// ***************connection to dbs established*******

// ****************User schema and model*********************
const userSchema={
    name:String,
    email:String,
    acid:Number,
    balance:Number,
    recentTransfers:[
        {
            sender:String,
            receiver:String,
            amount:Number
        }
    ]
}
const User=mongoose.model('account',userSchema);
// ******************User schema and model end*************

app.use(express.static(__dirname));
app.get("/", (req,res)=>{
    res.render('home',{
        myName:"test-2"
    })
})
app.get("/accounts", (req,res)=>{
    User.find({},function(err,allUsers){
        res.render('accounts',{
            userList:allUsers
        })
        // console.log(allUsers)
    })
})
app.get("/transfer", (req,res)=>{
    res.render('transfer',{
        myName:"test"
    })
})

app.post("/transfer",(req,res)=>{
    // console.log(req.body)
    const {sender:sender,receiver:receiver,amount:amount}=req.body;
    User.find({name:sender},function(err,Sender){
        User.find({name:receiver},function(err,Receiver){
            if(Sender.length!==1||Receiver.length!==1){
                console.log('Invalid person!Check spelling.');
            }else{
                if(Sender[0].balance<amount){
                    console.log('Insufficient Funds! Try a smaller amount.')
                }else{
                    Sender[0].recentTransfers=[{sender:sender,receiver:receiver,amount:amount},...Sender[0].recentTransfers]
                    Receiver[0].recentTransfers=[{sender:sender,receiver:receiver,amount:amount},...Receiver[0].recentTransfers]
                    Sender[0].balance-=amount;
                    Receiver[0].balance+=Number(amount);
                    Sender[0].save();
                    Receiver[0].save();
                    console.log(`Transfer of ${amount} from ${sender} to ${receiver} successful!`)
                }
            }
        })
        
    }) 
    res.render('transfer',{
        
    })
    
})
app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
})



