const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema({
    characterName: String,
    characterClass: String,
    guildName: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("player", PlayerSchema);