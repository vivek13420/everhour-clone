const express = require("express");
const User = require("./Users.model");
const app = express.Router();
app.get("/", async (req, res) => {
  let { r } = res.query;
  try {
    if (r) {
      let b = await User.find({ role: r });
      console.log(b);
      res.send(b);
    }
  } catch (e) {
    res.status(401).send(e.message);
  }
  let a = await User.find();

  res.send(a);
});
app.post("/login", async (req, res) => {
  let { email, password } = req.body;

  try {
    let user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).send("Authentication failed");
    }

    res.send({
      token: `${user.id}:${user.email}:${user.password}:${user.role}`,
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.post("/signup", async (req, res) => {
  let { email } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(404)
        .send(
          "Cannot create a user with existing email address, trying logging in using this email address"
        );
    }
    let createdUser = await User.create(req.body);
    res.send({
      token: `${createdUser.id}:${createdUser.email}:${createdUser.password}:${createdUser.role}`,
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = app;
