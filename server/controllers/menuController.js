import MenuItem from '../models/MenuItem.js';

import asynchHandler from 'express-async-handler'

const getMenu = asynchHandler(async (req, res) => {
    const items = await MenuItem.find({});
    res.json(items);
});

const createMenuItem = asynchHandler(async (req, res) => {
    const { name, description, price, imageUrl, category } = req.body;
    const item = new MenuItem({ name, description, price, imageUrl, category });
    const created = await item.save();
    res.status(201).json(created)
})
const updateMenuItem = asynchHandler(async (req, res) => {
    const item = await MenuItem.findById(req.params.id);
    if (item) {
        item.name = req.body.name || item.name;
        item.description = req.body.description || item.description;
        item.price = req.body.price || item.price;
        item.imageUrl = req.body.imageUrl || item.imageUrl;
        item.category = req.body.category || item.category;

        const updated = await item.save();
        res.json(updated);
    } else {
        res.status(404)
        throw new Error('Menu item not found')
    }
});



const deleteItem = asynchHandler(async (req, res) => {
    const deleted = await MenuItem.findByIdAndDelete(req.params.id);

    if (deleted) {
        res.json({ message: 'Menu Item Removed' });
    } else {
        res.status(404);
        throw new Error('Menu Item Not Found');
    }
});


export { getMenu, createMenuItem, updateMenuItem, deleteItem };