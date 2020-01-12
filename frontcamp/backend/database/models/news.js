const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: String,
});

module.exports = () => mongoose.model("News", NewsSchema);
