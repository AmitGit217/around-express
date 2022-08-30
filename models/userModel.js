/* eslint-disable object-curly-newline */
const mongoose = require('mongoose');

const validUrl = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;

const User = new mongoose.Schema({
  name: { required: true, minlength: 2, maxlength: 30, type: String },
  about: { required: true, minlength: 2, maxlength: 30, type: String },
  avatar: {
    required: true,
    type: String,
    validate: {
      validator: (input) => validUrl.test(input),
      message: (props) => `${props.value} is not a valid url`,
    },
  },
});

module.exports = mongoose.model('user', User);
