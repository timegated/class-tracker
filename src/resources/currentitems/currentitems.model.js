import mongoose from "mongoose";

const currentSchema = new mongoose.Schema(
  {
    head: {
      type: String,
    },
    shoulder: {
      type: String
    },
    chest: {
      type: String
    },
    legs: {
      type: String
    },
    waist: {
      type: String
    },
    hands: {
      type: String
    },
    feet: {
      type: String
    },
    wrist: {
      type: String
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
      required: true
    },
    belongsTo: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "characters",
      required: true,
    }
  }
)

export const CurrentItem = mongoose.model("currentitems", currentSchema);