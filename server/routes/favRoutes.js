import express from "express";
import { createFavorite, getAllFavorites, getFavoriteById, deleteFavorite } from "../controller/favoritesCon.js";
import authenticateUser from "../controller/auth.js";

const favRouter = express.Router();

favRouter.post('/', authenticateUser, createFavorite);

favRouter.get('/', authenticateUser, getAllFavorites);

favRouter.get('/:id', authenticateUser, getFavoriteById);

favRouter.delete('/:id', authenticateUser, deleteFavorite);

export default favRouter;
