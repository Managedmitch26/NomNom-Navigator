import express from "express";
import { createFavorite, getAllFavorites, getFavoriteById, deleteFavorite } from "../controller/favoritesCon";

const favRouter = express.Router();

favRouter.post('/', createFavorite);

favRouter.get('/', getAllFavorites);

favRouter.get('/:id', getFavoriteById);

favRouter.delete('/:id', deleteFavorite);

export default favRouter;
