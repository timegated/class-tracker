import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    charName: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    status: {
      type: String,
      required: true,
      enum: ["recieved", "not-received"],
      default: "not-received",
    },
    prio: {
      type: String,
      enum: ["slight-upgrade", "upgrade", "big-upgrade"],
      default: "slight-upgrade",
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
      required: true,
    }
  },
  { timestamps: true }
);

itemSchema.index({ characters: 1, name: 1 }, { unique: true });

export const Item = mongoose.model("items", itemSchema);
