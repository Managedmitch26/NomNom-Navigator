import { useState, useEffect, useCallback } from "react";

function JapanesePage() {
    const [radius, setRadius] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [restaurants, setRestaurants] = useState({});
    const [foodType, setFoodType] = useState()

    const submitSearch = async () => {
        const fetchConfig = {
            method: "post",
            body: JSON.stringify({
                radius: radius,
                price: price,
                category: 'japanese'
            }),
            credentials: "include",
            headers: {"Content-Type": 'application/json'}
        };

        const response = await fetch(
            'http://localhost:8000/api/yelp/category',
            fetchConfig
        );

        if (response.ok) {
            const categoryInfo = await response.json();
            setRestaurants(categoryInfo);
            console.log(categoryInfo)
        } else {
            console.log("Unable to fetch information")
        }
        console.log(category)
    }

    // useEffect(() => {
    //     submitSearch();
    // }, [foodType])





    return(
        <button onClick={submitSearch}>Submit</button>

    )

}

export default JapanesePage;
