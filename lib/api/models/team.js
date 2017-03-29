const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TeamSchema = new Schema({
  name: { type: String, required: true, unique: true },
  members: [{ employeeNumber: String, displayName: String }],
  bots: [{ type: Schema.Types.ObjectId, ref: 'Bot' }],
}, { timestamps: true });

mongoose.model('Team', TeamSchema);

module.exports = mongoose.model('Team');
