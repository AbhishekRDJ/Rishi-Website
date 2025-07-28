import asyncHandler from 'express-async-handler';
import cloudinary from '../config/cloudinary.js';

const uploadImage = asyncHandler(async (req, res) => {
    const file = req.files.image;
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: 'shawarma-hub'
    });
    res.status(200).json({ url: result.secure_url });
});

export { uploadImage };