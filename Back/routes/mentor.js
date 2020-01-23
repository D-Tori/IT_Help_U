import userController from '../controllers/user-controller'
import express from 'express';


const router = express.Router();

// mentors를 기본으로 들어옴
router.get('/', userController.mentors);

module.exports = router;