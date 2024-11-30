const bcrypt = require("bcrypt");
const express = require("express");
const User = require("../schema/authSchema/user");
const router = express.Router();

const saltRounds = 10; // Number of salt rounds for bcrypt hashing

router.post("/signup", async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;

  try {
    // Check if the user exists
    const userExist = await User.findOne({ email: email });
    console.log("User Exists:", userExist);

    if (!userExist) {
      // Create a new user if the user doesn't exist
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const newUser = new User({
        name: name,
        email: email,
        password: hashedPassword,
        confirmpassword: confirmpassword,
      });

      const savedUser = await newUser.save();
      console.log("Saved User:", savedUser);
      res.status(201).send("User created successfully");
    } else {
      res.status(201).send("User All ready exist");
    }
  } catch (error) {
    console.error("Error during sign-up:", error);
    res.status(500).json({ error: "An error occurred during sign-in" });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const userExist = await User.findOne({ email: email });
  // console.log(userExist);

  if (userExist) {
    // Compare the entered password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, userExist.password);

    if (!isMatch) {
      res.send(" email or password is incorrect");
    }
    res.send(userExist);
  } else {
    res.send("User noy found plese chack your email or password");
  }
});

module.exports = router;
