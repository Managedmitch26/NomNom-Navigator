import pool from '../NomNom.js';

const controller = {
    users: {
        getUsers: (req, res) => {
            pool.query(
                `SELECT
                    json_build_object(
                     'user_id', users.user_id,
                     'username', users.username,
                     'email', users.email,
                     'zip', users.zip,
                     'hashed_password', users.hashed_password,
                    )
                `
            )
        },

        addUsers: (req, res) => {

        },

        updateUsers: (req, res) => {

        },

        deleteUsers: (req, res) => {

        }
    }
}
