const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  //Associates a pin with a board
  pins: [
    {
      pin: {
        type: Schema.Types.ObjectId,
        ref: "pin"
      }
    }
  ]
});

module.exports = Board = mongoose.model("board", BoardSchema);
