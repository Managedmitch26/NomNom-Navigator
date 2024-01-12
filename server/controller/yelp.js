import axios from "axios";

export const fetchCategory = async (req, res) => {
    try {
        const {radius, category, price} = req.body;

        const url = 'https://api.yelp.com/v3/businesses/search';
        const location = req.user.zip.toString();

        const fetchResponse = await axios.get(url, {
            headers: {
                "Authorization": `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                "Accept": 'application/json',
                "Content-Type": 'application/json',
            },
            params: {
                location: location,
                radius: radius,
                categories: category,
                price: price ? price !== null : '1,2,3,4',
                sort_by: 'best_match',
            }
        },
            )
            res.json(fetchResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching information'});
    }

};
