const { Router } = require("express");
const RegisterRoutes = Router();
const { RegisterUser } = require("../Controllers/RegistrationControllers");

RegisterRoutes.get("/", (req, res) => {
  res.send("Welcome");
});

RegisterRoutes.post("/", RegisterUser);

module.exports = RegisterRoutes;
