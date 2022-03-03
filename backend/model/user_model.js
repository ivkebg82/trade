const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const UserSchema = new mongoose.Schema({
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Email is invalid')
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
        },
        tokens: [{
            token: {
                type: String,
                requiredPaths: true
            }
        }]
    }

);

UserSchema.statics.findByCredentials = async (email, password) => {
    const user = await UserModel.findOne({
        email
    });
    if (!user) {
        throw new Error('Invalid email!!!')
    }
    /*   const users = await UserModel.find();
      const isValid = users.find((user) => user.password === password)
      if (!isValid) {
          throw new Error('Invalid password!')
      }
      console.log('user') */
    const rightUser = await UserModel.findOne({
        email: user.email,
        password: password
    })
    if (!rightUser) {
        throw new Error('error')
    } else {
        return rightUser
    }

}


UserSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({
        _id: user._id.toString()
    }, "anabolik82")

    user.tokens = user.tokens.concat({
        token
    })
    await user.save()

    return token
}
const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel