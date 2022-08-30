const { Router } = require("express");
const UsersModel = require("../Models/UserModel");
const GetUsersRoutes = Router();
const { GetUsers } = require("../Controllers/GetUsersControllers");

GetUsersRoutes.get("/", GetUsers);

module.exports = GetUsersRoutes;
