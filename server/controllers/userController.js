import express from 'express'
import generateToken from '../utils/generateToken.js';
import User from '../models/User.js';
import asyncHandler from 'express-async-handler'

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, isAdmin } = req.body;
    const UserExist = await User.findOne({ email });
    if (UserExist) {
        res.status(400);
        throw new Error('User Already Exist')
    }
    const user = await User.create({ name, email, password, isAdmin });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    }
    else {
        res.status(400);
        throw new Error('Invalid UserData')
    }
});

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),

        });
    }
    else {
        res.status(401);
        throw new Error('Invalid User Creadential')
    }
});

export { authUser, registerUser }