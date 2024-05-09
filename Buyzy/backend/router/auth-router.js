// In Express.js, Express.router() is a mini application.
// It is used to create a router object.

// The router object allows you to define routes in your application.
// It is used to define routes in your application.

const express = require('express');
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const signupSchema = require("../validators/auth-validators");

router.route("/").get(authControllers.home);

router
  .route("/register")
  .post(validate(signupSchema), authControllers.register);
router.route("/login").post(authControllers.login);






module.exports = router; 