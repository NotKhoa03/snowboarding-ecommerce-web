import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import generateToken from '../utils/generateTokens.js';

//Controllers for user routes

// @desc Auth user & get token
// @route POST /api/users/login from userRoutes.js
// @access Public
const loginUser = asyncHandler(async (req, res) => { 
    const { email, password } = req.body

    const user = await User.findOne({ email });

    //If user is valid and password matches then send the user details and token
    if (user && (await user.matchPassword(password))){
       
        generateToken(res, user._id)

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    }
    else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
  
})

// @desc Register user & get token
// @route POST /api/users from userRoutes.js
// @access Public
const registerUser = asyncHandler(async (req, res) => { 
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email });

    if (userExists){
        res.status(400)
        throw new Error('Email already registered')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        generateToken(res, user._id)

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc Logout user & clear cookie because stored token in a httpOnly cookie
// @route POST /api/users/logout from userRoutes.js
// @access Private
const logoutUser = asyncHandler(async (req, res) => { 
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    })

    res.status(200).json({ message: 'Logged out successfully' })
})

// @desc Get user profile
// @route POST /api/users/profile from userRoutes.js
// @access Private
const getUserProfile = asyncHandler(async (req, res) => { 

    //Since this is a protected route, we can access the user details from the token
    const user = await User.findById(req.user._id)
   

    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

// @desc Update user profile
// @route PUT /api/users/profile from userRoutes.js
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => { 
    const user = await User.findById(req.user._id)

    //If user exists, update the user details. If password is updated, hash the password
    if (user) {
        //req.body is the data sent in the request
        //if it doesnt exist then it will be the same as before
        user.name = req.body.name || user.name 
        user.email = req.body.email || user.email

        if (req.body.password){
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
        });
    
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

// @desc Get all users
// @route GET /api/users from userRoutes.js
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => { 
    res.send('get users')
})

// @desc Get user by ID
// @route GET /api/users/:id from userRoutes.js
// @access Private/Admin
const getUserById = asyncHandler(async (req, res) => { 
    res.send('get user by id')
})

// @desc Delete user
// @route DELETE /api/users/:id from userRoutes.js
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => { 
    res.send('delete user')
})

// @desc Update user
// @route PUT /api/users/:id from userRoutes.js
// @access Private/Admin
const updateUser = asyncHandler(async (req, res) => { 
    res.send('update user')
})

export { loginUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, getUserById, deleteUser, updateUser };

