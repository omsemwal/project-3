const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    title: { type:string, required:true, enum:["Mr", "Mrs", "Miss"] },
    name: { type:string, required:true },
    phone: { type:string, required:true, unique:true },
    email: { type:string, required:true,  unique:true },
    password: { type:string, required:true},
    address: {
        street: { type:string },
        city: { type:string },
        pincode: { type:string }
    }
},
    { timestamps: true });


module.exports = mongoose.model("User", UserSchema)
