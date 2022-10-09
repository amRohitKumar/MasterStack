const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const register = async (req, res) => {
  try {
    const { teamName, password, clgName, sponsors, members } = req.body;
    const emailArr = members.map((member) => member.email);
    
    //   checking for duplicate team name
    const resp1 = await User.findOne({ name: teamName });
    if (resp1) return res.status(400).send({ msg: "Team name already in use" });

    // checking for duplicate members
    const resp2 = await User.find({ "members.email": { $in: emailArr } });
    if (resp2.length)
      return res
        .status(400)
        .send({ msg: "One or more member is already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name: teamName,
      password: hashedPassword,
      clgName: clgName,
      sponsors: sponsors,
      members: members,
    });

    // creating json web token to store in frontend
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_LIFETIME,
    });

    res.status(200).json({
      user:newUser,
      token,
    });
  } catch (error) {
    return res.status(400).send({ msg: "Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { teamName, password } = req.body;
    //console.log(teamName);
    const resp = await User.findOne({ teamName: teamName });
    if (!resp) {
      return res.status(400).send({ msg: "Invalid Credentials" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, resp.password);
    if (!isPasswordCorrect) {
      return res.status(400).send({ msg: "Invalid Credentials" });
    }

    const token = jwt.sign({ userId: resp._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_LIFETIME,
    });
    res.status(200).json({
      user: resp,
      token,
    });
  } catch (error) {
    return res.status(400).send({ msg: "Server Error" });
  }
};

module.exports = { register, login };
