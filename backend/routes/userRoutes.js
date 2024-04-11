import express from 'express';
const router = express.Router();
import { loginUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, getUserById, deleteUser, updateUser } from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

//Used controller file to keep the code clean and modular

//All routes to /api/users
router.route('/').post(registerUser).get(protect, admin, getUsers);

//Post because only one method
router.post('/logout', logoutUser)
router.post('/login', loginUser)

//routes to /api/users/profile
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

//routes to /api/users/:id
router.route('/:id').get(protect, admin, getUserById).delete(protect, admin, deleteUser).put(protect, admin, updateUser);



export default router;