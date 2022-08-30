const UsersModel = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secret = "WTFAUTH";

const LoginUser = async (req, res) => {
  const { email, password, role } = req.body;
  let validPassword;

  if (!role) {
    return res.status(501).json({ message: "Role is not specified" });
  }
  if (!email) {
    return res.status(501).json({ message: "Email is not specified" });
  }
  const user = await UsersModel.findOne({ email: email });
  if (!user) {
    return res.status(501).json({ message: "Email is not Registered" });
  } else if (role !== user.role) {
    return res.status(501).json({ message: `You're not ${user.role}` });
  } else {
    validPassword = await bcrypt.compare(password, user.password);
  }

  if (validPassword) {
    const token = jwt.sign({ id: user._id, email: user.email }, secret, {
      expiresIn: "30d",
    });
    return res.status(200).json({
      status: 200,
      token: token,
      data: user,
      message: "Logged in Successfully",
    });
  } else {
    return res.status(501).json({ message: "Invalid Login Details" });
  }
};

const LoginUserWithToken = async (req, res) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  //   console.log(token);

  if (!token) {
    return res.status(401).json({ message: "Forbidden" });
  } else {
    const decodedToken = jwt.verify(token, secret);
    if (decodedToken) {
      const user = await UsersModel.findOne({ email: decodedToken.email });
      return res.status(200).json({ user });
    } else {
      return res.status(401).json({ message: "Forbidden" });
    }
  }
};

module.exports = { LoginUser, LoginUserWithToken };
