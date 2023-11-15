import pool from "../utils/NomNom.js";

export const createFavorite = async (req, res) => {
    const { user_id, bus_id, bus_name, bus_image, bus_rating, bus_price, bus_address, bus_phone } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO favorites (user_id, bus_id, bus_name, bus_image, bus_rating, bus_price, bus_address, bus_phone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [user_id, bus_id, bus_name, bus_image, bus_rating, bus_price, bus_address, bus_phone]
        );

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error'});
    }
};

export const getFavoriteById = async (req, res) => {
    const fav_id = req.params.id;

    try {
        const result = await pool.query('SELECT * FROM favorites WHERE fav_id = $1', [fav_id]);

        if (result.rows.length === 0) {
            res.status(404).json({ error: 'Favorite not found'});
        } else {
            res.json(result.rows[0]);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getAllFavorites = async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM favorites');

      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

export const deleteFavorite = async (req, res) => {
  const fav_id = req.params.id;

  try {
    const result = await pool.query('DELETE FROM favorites WHERE fav_id = $1 RETURNING *', [fav_id]);

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Favorite not found' });
    } else {
      res.json({ message: 'Favorite deleted successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  };
