import express from "express";
import { createFavorite, getAllFavorites, getFavoriteById, deleteFavorite } from "../controller/favoritesCon.js";
import { authenticateToken } from "../controller/auth.js";

const favRouter = express.Router();

favRouter.post('/', authenticateToken, createFavorite);

favRouter.get('/', authenticateToken, getAllFavorites);

favRouter.get('/:id', authenticateToken, getFavoriteById);

favRouter.delete('/:id', authenticateToken, deleteFavorite);

export default favRouter;
