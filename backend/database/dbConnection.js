import mongoose from "mongoose";

export const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"JOB_SEEKING"
    })
    .then(()=>{
        console.log("Databese Connected");
    })
    .catch((err)=>{
        console.log(`Error : ${err}`);
    })
};