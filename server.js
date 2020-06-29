const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const cors = require("cors");

const app = express();
const whitelist = ["http://localhost:8080"];

const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        };
    }
};

app.use(express.json({ extended: true }));
app.use(cors(corsOptions));
connectDB();

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/players", require("./routes/players"));

if (process.env.NODE_ENV) {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
};

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
});