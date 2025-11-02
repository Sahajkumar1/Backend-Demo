import mongoose from "mongoose";

const connectDB = async () => {
    
    try {
        mongoose.connection.on("connected", ()=>{console.log("Database connected successfully")} )
        let mongodbURI = process.env.MOGOOSE_URI;
        const projectName = 'resume-builder';

        if(!mongodbURI){
            throw new Error("MOGOOSE_URI environment variable not set")

        }
        if(mongodbURI.endsWith('/')){
            mongodbURI = mongodbURI.slice(0, -1)
        }
        await mongoose.connect(`${mongodbURI}/${projectName}`)


    } catch (error) {
        comsole.error("Error connecting to MongoDB:",error)
        
    }
}
  export default connectDB;