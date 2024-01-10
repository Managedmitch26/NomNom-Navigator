import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()

export const authenticateToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (token === null) return res.status(401).json({Error: 'No Token'});

    jwt.verify(token, process.env.SECRET_TOKEN, (err,user) => {
      if (err) return res.status(401).json({Error: 'Unauthorized Access'})
      req.user=user
      next()
    })
  }
