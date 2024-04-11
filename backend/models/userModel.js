import mongoose from "mongoose"
import bcrypt from 'bcryptjs'

//Intialize a user schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

//Match the password entered by the user when logging in with the hashed password in the database
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

//Hash the password whenever a new account is created before its saved
userSchema.pre ('save', async function(next){
    
    //Check if password is modified already so we dont hash it again
    if(!this.isModified('password')){
        next()
    }

    //Generate a salt to hash the password. Asynchronous to avoid blocking the event loop
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User