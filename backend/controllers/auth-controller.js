const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// *-------------------
// Home Logic
// *-------------------
const home = async (req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to our home page" });
  } catch (error) {
    console.log(error);
  }
};

// *-------------------------------
//* User Registration Logic 📝
// *-------------------------------
// 1. Get Registration Data: 📤 Retrieve user data (username, email, phone,  password).
// 2. Check Email Existence: 📋 Check if the email is already registered.
// 3. Hash Password: 🔒 Securely hash the password.
// 4. Create User: 📝 Create a new user with hashed password.
// 5. Save to DB: 💾 Save user data to the database.
// 6. Respond: ✅ Respond with "Registration Successful" or handle errors.

const register = async (req, res) => { 
  try {
    // const data = req.body;
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    //hash the password

    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    //create a new user

    const userCreated = await User.create({ username, email, phone, password  });
    res.status(201).json({ msg: "Registration Successful", token: await userCreated.generateToken(), userId: userCreated._id.toString(), });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    // next(error);
  }
};

// *-------------------------------
//* User Login Logic 📝
// *-------------------------------

const login = async (req,res,next) => {
  try {
    const { email, password } = req.body
    const userExist = await User.findOne({ email: email });

    if (!userExist) {
      return res.status(400).json({ msg: "Invalid Credentials" });
     
    }

    // if user exist then COMPARE bcrypt password with the input login password

    // const user = await bcrypt.compare(password, userExist.password);

    const user = await userExist.comparePassword(password);


    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    res.status(200).json({ msg: "Login Successful", token: await userExist.generateToken(), userId: userExist._id.toString(), });

}

catch(error){
  res.status(500).json({ message: "Internal server error" });
  
}

};










module.exports = { home, register, login };