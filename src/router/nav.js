const express = require("express");
const router = express.Router();
const userDetails = require("../models/userDetails");
const UserAdd = require("../models/register");

router.get("/", function (req, res) {
  res.render("homepage");
});

router.get("/course", function (req, res) {
  res.render("course");
});

router.get("/gallery", function (req, res) {
  res.render("gallery");
});

router.get("/login", function (req, res) {
  res.render("login");
});

router.get("/register", function (req, res) {
  res.render("register");
});

//create a POST request for the register
router.post("/register", async function (req, res) {
  try {
    const password = req.body.password;
    const cpassword = req.body.confirmpassword;

    if (password === cpassword) {
      const registerEmployee = new UserAdd({
        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
      });

      const addvalue = await registerEmployee.save();
      
      res.status(201).render("register");
    } else {
      res.send("Password is incorrect! Please try again.");
    }
    
  } catch (error) {
    res.status(400).send(error);
  }
  res.render("register");
});

module.exports = router;
