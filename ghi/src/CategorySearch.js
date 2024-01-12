import { useState } from "react";

const CategoryPage = () => {
    const [radius, setRadius] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    // const [busID, setBusId] = useState("");
    // const [busName, setBusName] = useState("");
    // const [busImage, setBusImage] = useState("");
    // const [busRating, setBusRating] = useState("");
    // const [busPrice, setBusPrice] = useState("");
    // const [busAddress, setBusAddress] = useState("");
    // const [busPhone, setBusPhone] = useState("");
    // const [tags, setTags] = useState([]);

    const sumbitSearch = async (e) => {
        const fetchConfig = {
            method: "post",
            body: JSON.stringify({
                radius: radius,
                price: price,
                category: category
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
            console.log(categoryInfo);
        } else {
            console.log("Unable to fetch information")
        }
    }


    return(
        <button onClick={sumbitSearch}>Submit</button>
    )

}

export default CategoryPage;
