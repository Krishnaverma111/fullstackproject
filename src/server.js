const express = require("express")
const mongoose = require ( "mongoose")
const userrouter = require("./Route/route")
const app = express();

app.use(express.json())

const mongourl = "mongodb+srv://krishnaverma112131_db_user:e3QqRm8EphksKMrG@api.dl7vlgp.mongodb.net/?appName=api";
mongoose.connect(mongourl)
.then(()=>{console.log(`mongo db connected sucessully`)})
.catch((e)=>{console.log(`mongo error ${e}`)})

app.use("/",userrouter)
const port = 5000;
app.listen(port,()=>{console.log(`this server is running on port =:${port}`)})

