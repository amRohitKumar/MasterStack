const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  clgName: {
    type: String,
    required: true,
  },
  sponsors: {
    type: Boolean,
    required: true,
  },
  members: [
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      number: {
        type: Number,
        required: true,
      },
      year: {
        type: Number,
        required: true,
      },
      branch: {
        type: String,
        required: true,
      }
    },
  ],
  status: {
    type: Number,
    default: 0,
  },
  items: [
    {
      name: {
        type: String,
        required: true,
      },
      points: {
        type: Number,
        required: true,
      },
      parent: {
        type: Number,
        required: true,
      },
      cost: {
        type: Number,
        required: true,
      },
      id: {
        type: String,
        required: true
      }
    }
  ],
  amount: {
    type: Number,
    default: 100000,
  },
  points: {
    type: Number,
    default: 0
  },
  startedAt: {
    type: Date,
  },
  endsAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }

});

const User = mongoose.model("User", UserSchema);
module.exports = User;
