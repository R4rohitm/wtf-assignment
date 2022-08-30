const bcrypt = require("bcryptjs");
const UserModel = require("../Models/UserModel");

const validatePassword = (password) => {
  let letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let specialChars = ["!", "#", "$", "%", "&", "(", ")"];

  password = password.split("");
  password = password.sort();
  if (
    !specialChars.includes(password[0]) ||
    !letters.includes(password[password.length - 1])
  ) {
    return false;
  }
  return true;
};

const RegisterUser = async (req, res) => {
  let { first_name, last_name, email, password, mobile, role, status } =
    req.body;

  if (password && password.length >= 8) {
    if (!validatePassword(password)) {
      return res.status(501).json({ message: "Enter A Valid Password" });
    }
  } else {
    return res
      .status(501)
      .json({ message: "Password must be at least 8 characters" });
  }

  password = await bcrypt.hash(password, 10);

  const checkUser = await UserModel.findOne({ email: email });
  if (checkUser) {
    return res.status(501).json({ message: "User Already Exists" });
  } else {
    const user = await UserModel({
      first_name,
      last_name,
      email,
      password,
      mobile,
      role,
      status,
    });

    user.save((err, user) => {
      if (err) return res.status(501).json({ message: err.message });
      else
        return res
          .status(200)
          .json({ message: "Account successfully created" });
    });
  }
};

module.exports = { RegisterUser };
