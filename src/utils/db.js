import mongoose from "mongoose";
import options from "../config";

console.log(options.dbUrl);

export const connect = (url = options.dbUrl, opts = {}) => {
  console.log({ connectDB: "MongoDb connected" });
  return mongoose.connect(url, {
    ...opts,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};
