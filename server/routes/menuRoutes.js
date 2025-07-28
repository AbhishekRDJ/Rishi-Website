import express from 'express'
import {
    getMenu,
    createMenuItem,
    updateMenuItem,
    deleteItem
} from '../controllers/menuController.js'

import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
    .get(getMenu)
    .post(protect, admin, createMenuItem);

router.route('/:id')
    .put(protect, admin, updateMenuItem)
    .delete(protect, admin, deleteItem);

export default router;