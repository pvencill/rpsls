const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  name: String,
  businessId: String,
  type: { type: String, enum: ['bot', 'human'] },
});

PlayerSchema.statics.findOrCreate = function findOrCreate(query, body, cb) {
  return this.findOne(query, (error, player) => {
    if (error) return cb(error);
    if (player) return cb(null, player);
    return this.create(body, cb);
  });
};

mongoose.model('Player', PlayerSchema);

module.exports = mongoose.model('Player');
