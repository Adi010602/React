const mongoose = require('mongoose');
const db =process.env.DATABASE;

mongoose.connect(db,{
    maxPoolSize: 50,
    wtimeoutMS: 2500,
}).then(()=>{
    console.log('connection successful');
}).catch((e)=>{
    console.log(e);
})