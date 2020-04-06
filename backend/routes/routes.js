const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

// { session : false } because we don’t want to store the user details in a session
router.post('/signup', passport.authenticate('signup', { session : false }) , async (req, res, next) => {
  res.json({ 
    message : 'Signup successful',
    user : req.user 
  });
});

router.post('/login', async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {     try {
        if(err || !user){
          const error = new Error('An Error occurred')
          return next(error);
        }
        req.login(user, { session : false }, async (error) => {
          if( error ) return next(error)
          const body = { _id : user._id, email : user.email };
          const token = jwt.sign({ user : body },'jwt_secret_key_r0x');
          return res.json({ token });
        });     } catch (error) {
        return next(error);
      }
    })(req, res, next);
  });
  
  module.exports = router;