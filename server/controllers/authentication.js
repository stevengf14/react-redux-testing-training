const User = require("../models/user");

exports.signup = function (req, res, next) {
  const { email, password } = req.body;

  // See if a user with the given email exists
  User.findOne({ email: email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }

    // If a user with email does exists, return an error
    if (existingUser) {
      return res.status(422).send({ error: "Email is in use" });
    }

    // If a user with email does NOT exists, create and save user record
    const user = new User({
      email,
      password,
    });

    user.save((err) => {
      if (err) {
        return next(err);
      }

      // Respond to request indicating the user was created
      res.json(user);
    });
  });
};
