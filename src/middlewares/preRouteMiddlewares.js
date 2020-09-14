const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

module.exports = (app) => {
  // passport middleware
  app.use(
    session({
      resave: true,
      saveUninitialized: true,
      secret: process.env.SESSION_SECRET,
      cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
      store: new MongoStore({
        url: process.env.MONGODB_URI,
        autoReconnect: true,
      }),
    })
  );
  app.use(cors());
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static("/public"));
  app.use(passport.initialize());

  return app;
};
