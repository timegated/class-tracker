const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();


app.use(express.json({ extended: true }));

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
});