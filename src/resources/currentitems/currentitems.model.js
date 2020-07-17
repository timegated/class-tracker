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
      type: mongooseSchemaTypes.ObjectId,
      ref: "characters"
    }
  }
)

currentSchema.index({ characters: 1, name: 1 }, { unique: true });
export const CurrentItem = mongoose.model("currentitems", currentSchema);