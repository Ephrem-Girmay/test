import express from 'express';
import User from '../models/userModel.js';

async function getUser(req, res) {
    try {
        const userId = req.params.userId;

        res.status(200).json(userId);
    } catch {}
}

const userRoutes = express.Router();

userRoutes.get('/:id', getUser);
// Routes to be created
// userRoutes.put('/:id', updateUser);
// userRoutes.delete('/:id', deleteUser);

export default userRoutes;
