const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('User', userSchema);


