const mongoose = require("mongoose");

const CharacterSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    characterName: {
        type: String,
        required: true
    },
    characterClass: {
        type: String,
        required: true
    },
    guildName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("characters", CharacterSchema);