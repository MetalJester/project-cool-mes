const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instructionsSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    index: true
  },
  inventory: [
    {
      type: Schema.ObjectId,
      ref: "Inventory"
    }
  ],
  equipment: [
    {
      type: Schema.ObjectId,
      ref: "Equpiment"
    }
  ],
  duration: {
    type: Number
  }
});

const Instructions = mongoose.model("Instructions", instructionsSchema);

module.exports = Instructions;
