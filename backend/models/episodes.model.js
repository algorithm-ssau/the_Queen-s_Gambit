const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const edisodeSchema = new Schema({
    number:{type: Number, unigue: true},
    name: {type: String, trim: true, unigue: true},
    description: {type: String, trim: true}
},{
    timestamps: true,
});

const Episode = mongoose.model('Episode', edisodeSchema);

module.exports = Episode;