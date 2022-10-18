const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const templateSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: false,
    },
    is_deleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('User', templateSchema);
