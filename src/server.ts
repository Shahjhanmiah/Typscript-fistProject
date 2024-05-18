
import app from "./app";
import confiz from "./app/confiz";
import mongoose from "mongoose";



async function main() {
    try{
        await mongoose.connect(confiz.database_url  as string);
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    app.listen(confiz.port, () => {
        console.log(`Example app listening on port ${confiz.port}`)
      })
    }catch(error){
        console.log(error);
    }
    }
  main()

