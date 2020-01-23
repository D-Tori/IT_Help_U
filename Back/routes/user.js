var userController = require('./../controllers/user-controller'); 

var express = require('express');
var router = express.Router();


router.post('/signUp', userController.registerUser);

router.post('/login', userController.login);

router.get('/mypage', userController.isAuthorized);


module.exports = router;
