import pool from "../utils/NomNom.js";

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

        addUsers: async (req, res) => {
            const {user_id, username, email, zip, hashed_password} = req.body
            try {
                const result = await pool.query(
                    'INSERT INTO users (user_id, username, email, zip, hashed_password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                    [user_id, username, email, zip, hashed_password],
                    )

                    res.json(result.rows[0])

                    if (result.rows[0].length !== 0) {
                        res.status(200).send('User Successfully Created')
                    } else {
                        res.status(400).send('User unable to be created')
                       }
            }  catch (err) {
                console.error(err);
                res.status(500).send('Internal Server Error')
            }
        },

        updateUsers: async (req, res) => {
            const {user_id, username, email, zip, hashed_password} = req.body

            try {
                const result = await pool.query(
                'UPDATE users (user_id, username, email, zip, hashed_password) VALUES ($1, $2, $3, $4, $5) WHERE user_id = $1',
                [user_id, username, email, zip, hashed_password],
                )

                res.json(result.rows[0])
            } catch (err) {
                console.error(err);
                res.status(500).send('Internal Server Error')
            }
        },

        deleteUsers: async (req, res) => {
            const user_id = req.params.id
            try {
                const result = await pool.query(
                'DELETE FROM users WHERE user_id = $1',
                [user_id],
                )

                if (result.rows[0].length !== 0) {
                    res.status(200).send('User Successfully Deleted')
                } else {
                    res.status(404).send('User Not Located')
                   }

            } catch (err) {
                console.error(err);
                res.status(500).send('Internal Server Error')
            }
        }
    }
}

export default controller;
