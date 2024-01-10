import express from "express";
import { fetchCategory } from "../controller/yelp.js";
import { authenticateToken } from "../controller/auth.js";

const yelpRouter = express.Router();

yelpRouter.post('/category', authenticateToken, fetchCategory);

export default yelpRouter;
