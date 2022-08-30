/* eslint-disable object-curly-newline */
const mongoose = require('mongoose');

const validUrl = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;

const Card = mongoose.Schema({
  name: { required: true, minlength: 2, maxlength: 30, type: String },
  link: {
    required: true,
    type: String,
    validate: {
      validator: (input) => validUrl.test(input),
      message: (props) => `${props.value} is not a valid url`,
    },
  },
  owner: { ref: 'user', type: mongoose.Schema.Types.ObjectId, require: true },
  likes: { type: Array, default: [] },
  createdAt: { type: Date, value: Date.now() },
});

module.exports = mongoose.model('card', Card);
