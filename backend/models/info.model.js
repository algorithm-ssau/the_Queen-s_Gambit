const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let infoSchema = new Schema({
    name: {
        type: String,
        unigue: true
    },
    nameRU: {
        type: String,
        unigue: true
    },
    biography: {
        type: String,
        unigue: true
    }
},
{
    timestamps: true,
});
const Info= mongoose.model('Info', infoSchema);
module.exports = Info;
