import mongoose from "mongoose";
import options from "../config";

export const connect = (url = options.dbUrl, opts = {}) => {
  console.log({ connectDB: "MongoDb connected locally" });
  return mongoose.connect(url, {
    ...opts,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};
