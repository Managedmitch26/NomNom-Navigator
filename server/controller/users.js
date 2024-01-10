import dotenv from "dotenv";
dotenv.config()
import pool from "../utils/NomNom.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const controller = {
    users: {
        getOneUser: async (req, res) => {
            const user_id = req.params.id;
            try {
                const result = await pool.query('SELECT * FROM users WHERE user_id = $1', [user_id]);

                if (result.rows.length === 0) {
                    res.status(404).json({ error: "User Not Found" });
                } else {
                    res.json(result.rows[0]);
                }
            } catch (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
        },

        getAllUsers: async (req, res) => {
            try {
                const result = await pool.query('SELECT * FROM users ORDER BY user_id ASC')
                res.json(result.rows)
            }  catch (err) {
                console.error(err);
                res.status(500).send('Internal Server Error')
            }
        },

        addUsers: async (req, res, next) => {
            const { username, email, zip, hashed_password } = req.body;
            const hashedPassword = await bcrypt.hash(hashed_password, 10);

            try {
              const result = await pool.query(
                'INSERT INTO users (username, email, zip, hashed_password) VALUES ($1, $2, $3, $4) RETURNING *',
                [username, email, zip, hashedPassword]
              );

              if (result.rows.length !== 0) {
                const newUser = result.rows[0];
                const userId = newUser.user_id; // Access the user ID

                next()
              } else {
                res.status(400).send('User unable to be created');
              }
            } catch (err) {
              console.error(err);
              res.status(500).send('Internal Server Error');
            }
          },


          updateUsers: async (req, res) => {
            const { user_id, username, email, zip, hashed_password } = req.body;

            try {
              const result = await pool.query(
                'UPDATE users SET username = $2, email = $3, zip = $4, hashed_password = $5 WHERE user_id = $1',
                [user_id, username, email, zip, hashed_password]
              );

              res.json({ message: "User was successfully updated"});
            } catch (err) {
              console.error(err);
              res.status(500).send('Internal Server Error');
            }
          },

        deleteUsers: async (req, res) => {
            const user_id = req.params.id
            try {
                const result = await pool.query(
                'DELETE FROM users WHERE user_id = $1',
                [user_id],
                )

                if (result.rowCount !== 0) {
                    res.status(200).send('User Successfully Deleted')
                } else {
                    res.status(404).send('User Not Located')
                   }

            } catch (err) {
                console.error(err);
                res.status(500).send('Internal Server Error')
            }
        },

        loginUser: async (req, res) => {
          const { email, hashed_password } = req.body;

            try {
                const result = await pool.query(
                  'SELECT * FROM users WHERE email = $1', [email]
                  );
                const user = result.rows[0]
                if (await bcrypt.compare(hashed_password, user.hashed_password)) {
                    const accessToken = jwt.sign(
                      {userId: user.user_id, email: user.emails, zip: user.zip},
                      process.env.SECRET_TOKEN,
                      { expiresIn: '1h' }
                      )
                    res.cookie("token", accessToken, {
                      httpOnly: true,
                    })
                    res.json({ accessToken: accessToken, Message: 'Success' })

                } else (
                    res.status(401).send('Incorrect login credentials')
                )
              } catch (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
              }
        }
    }
}

export default controller;
