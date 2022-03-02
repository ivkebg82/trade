const mongoose = require('mongoose')
const validator = require('validator')
const UserSchema = new mongoose.Schema({
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Email is ibvalid')
                }
            }
        },
        password: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            validate(value) {
                if (value.toLowerCase().includes('password')) {
                    throw new Error('Password canot contains paswword!')
                }
            }
        }
    }

);

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel