const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// static signup method
userSchema.statics.signup = async function (email, password) {

    // validation
    if (!email || !password) {
        throw Error("All fields are necessary");
    }
    if (!validator.isEmail(email)) {
        throw Error("Invalid Email format");
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("Weak Password.")
    }

    // we cannot use arrow functions because of the usage of this keyword
    // we cannot use User.findOne because we exported it and used it some place else so instead we use 'this' keyword
    const exists = await this.findOne({ email })
    if (exists) {
        throw Error('Email already exists!')
    }
    // hash the password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })

    return user
}

// static login method

userSchema.statics.login = async function (email, password) {

    // validation
    if (!email || !password) {
        throw Error("All fields are necessary");
    }

    const user = await this.findOne({ email })
    if (!user) {
        throw Error('Incorrect Email!')
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error('Incorrect password')
    }

    return user
}

module.exports = mongoose.model('User', userSchema) 