const mongoose = require('mongoose');
const validator = require('validator');

const cardsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The name field must be filled'],
    minlength: [2, 'Min length is 2'],
    maxlength: [30, 'Max length is 30'],

    /*
    *  3- Since we just have to make sure that the image is a URL,
    *     we don't need to do validation in this part of the model
    * */

    // validate: {
    //   validator: (v) => validator.isAlpha(v),
    //   message: 'Must be a valid name with letters',
    // },
  },
  image: {
    type: String,
    required: [true, 'The image field must be filled'],
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Must be a valid URL',
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { versionKey: false });

module.exports = mongoose.model('card', cardsSchema);

/*
*  4- It's possible to add or remove unintended resource to the
*  server. For instance, the validation is not very strong and
*  we can have names which are numbers or symbols. In this sense,
* */

/*
*   2- The request respect REST API principles. For instance, the
*   correct methods are used for resource creation, retrieval and
*   deletion, the application is stateless and handle errors in
*   the right way.
* */
