import mongoose from "mongoose";
import options from "../config";

export const connect = (url = options.dbUrl_site, opts = {}) => {
  console.log({ connectDB: "MongoDb connected" });
  return mongoose.connect(url, {
    ...opts,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};
