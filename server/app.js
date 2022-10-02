const express= require('express');
const app= express();
const router= require("./Router/router")
const cors= require("cors")
require("./DB/DBConnection")
require("dotenv").config();
const port= process.env.PORT || 5000;
const bodyparser= require("body-parser");
app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({limit: '50mb', extended: true}));
app.use(cors())
app.use('/router',router)
app.listen(port,()=>{
    console.log('connected',`${port}`)
})