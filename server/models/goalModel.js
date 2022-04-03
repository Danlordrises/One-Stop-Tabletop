const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add a text value']
    }
  }, 
  {
    timestamps: true //creates 'updated at' and 'created at' automatically
  }
);

module.exports = mongoose.model('Goal', goalSchema);