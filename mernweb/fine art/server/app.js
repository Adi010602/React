const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('./node_modules/cookie-parser');

const app =express();

//configure env file & require connection file
dotenv.config({path : './config.env'});
require('./db/conn');
const port = process.env.PORT;

//Required mmodel
const Users = require('./models/userSchema')


//methods used to get dta and cookies from frondend
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

app.get('/',(req, res)=>{
    res.send("Hello world")
})

//registeration
app.post('./register',async (req, res)=>{
    try{
        //get body or data
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            name : name,
            email : email,
            password: password
        });

        //save method s used to create user or insert user
        //but before sving or inserting, passwordwill hasah 
        //because of hashing. after hashing, it  will  save  to db
        const created = await  createUser.save()
        console.log(created);
        res.status(200).send("Registered");
    }catch(error){
        res.status(400).send(error)
    }
})


app.listen(port, ()=>{
    console.log("server is listening",port)
})