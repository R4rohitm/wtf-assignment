const express = require("express");
const connection = require("./Database/db");
const cors = require("cors");
const app = express();
const LoginRoutes = require("./Routes/LoginRoutes");
const RegisterRoutes = require("./Routes/RegisterRoutes");
const GetUsersRoutes = require("./Routes/GetUsersRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
app.use("/login", LoginRoutes);
app.use("/register", RegisterRoutes);
app.use("/getusers", GetUsersRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Wtf-backend" });
});

app.listen(8080, async () => {
  console.log("listening on port 8080");
  await connection;
  console.log("connected to db");
});
