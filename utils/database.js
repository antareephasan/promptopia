import mongoose from 'mongoose';

let isConncected = false; // track connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);


    if(isConncected) {
        console.log("MongoDB us already connected");
        return;
    }


    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })

        isConncected = true;
        
    } catch (error) {
        console.log(error);
    }
}