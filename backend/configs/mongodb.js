import mongoose from "mongoose";

//connect to the mongodb database

const connectDB = async () => {

    mongoose.connection.on('connected',()=> console.log('Database Connected'))

   await mongoose.connect(`${process.env.MONGODB_URI}/lms`).then(()=>{
        console.log("database connected successfully!")
    }).catch((err)=>{
        console.log(`connection failed ${err}`);
        
    })

}

export default connectDB