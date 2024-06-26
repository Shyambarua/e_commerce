const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
        },
        phone: {
            type: String,
            required: true
        },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

})


// secure the password with bcrypt using PRE method
// working as a middleware 

userSchema.pre("save", async function(){
    const user = this;
    if (!user.isModified("password")) {
        next();
        
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } catch (error) {
        next(error);
    }
})


// compare password

userSchema.methods.comparePassword = async function(password){

    return bcrypt.compare(password, userExist.password);
}

// json web token

userSchema.methods.generateToken = function () {

    try {
        return jwt.sign(
            {
              userId: this._id.toString(),
              email: this.email,
              isAdmin: this.isAdmin,
            },
            process.env.JWT_SECRET_KEY,
            {
              expiresIn: "30d",
            }
          );
        
    } catch (error) {
        console.error(error);
    }
    
};



// define the model or the collection name

const User = new mongoose.model("User", userSchema);

module.exports = User;