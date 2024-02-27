import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
  const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-r5ui0y0-shard-00-00.jazle1g.mongodb.net:27017,ac-r5ui0y0-shard-00-01.jazle1g.mongodb.net:27017,ac-r5ui0y0-shard-00-02.jazle1g.mongodb.net:27017/?ssl=true&replicaSet=atlas-o1jwqk-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("database connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};

export default Connection;
