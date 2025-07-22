import mongoose from "mongoose";

export const connection = async (username,password) => {
  try {
    const URL = `mongodb+srv://${username}:${password}@cluster0.ed6ct7p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    //connect function for connection
    await mongoose.connect(URL, {
     // useUnifiedTopology: true,
      useNewUrlParser: true,
     // useFindAndModify: true,
      serverSelectionTimeoutMS: 10000,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log(error,'Error in connecting DB');
  }
};
export default connection;
