const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = () => mongoose.model("Users", UserSchema);
