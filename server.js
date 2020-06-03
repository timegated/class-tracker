const express = require("express");
const connectDB = require("./config/db");
// const path = require("path");
const app = express();

app.use(express.json({ extended: true }));

connectDB();

app.use("/api/players", require("./routes/players"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
});