import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

const authenticateUser = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token) {
    jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

export default authenticateUser;
