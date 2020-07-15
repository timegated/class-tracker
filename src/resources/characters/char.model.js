const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  characterName: {
    type: String,
    required: true,
  },
  characterClass: {
    type: String,
    required: true,
  },
  guildName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const Characters = mongoose.model("characters", characterSchema);
