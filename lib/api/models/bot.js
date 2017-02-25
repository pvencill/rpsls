const mongoose = require('mongoose');
const validators = require('mongoose-validators');

const Schema = mongoose.Schema;

const BotSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, validate: validators.isURL() },
  secret: String,
}, { timestamps: true });

mongoose.model('Bot', BotSchema);

module.exports = mongoose.model('Bot');
