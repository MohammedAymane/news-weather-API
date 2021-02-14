const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    date: {
        type: String
    },
    photos: {
        type: String
    },
    field: {
        type: String
    }
})

module.exports = mongoose.model("news", NewsSchema);