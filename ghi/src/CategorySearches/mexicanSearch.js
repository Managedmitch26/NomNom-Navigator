import { useState, useEffect } from "react";

function MexicanPage() {
    const [radius, setRadius] = useState("");
    const [prices, setPrices] = useState([]);
    const [restaurants, setRestaurants] = useState({});

    const handlePriceChange = (e) => {
      const {checked, id} = e.target;

      if (checked) {
        prices.push(id);
        console.log("prices length", prices.join(",").length)
      } else {
        prices.splice(prices.indexOf(id), 1);
      }
      setPrices(prices);
      console.log("prices", prices.join(","));
    };

    const submitSearch = async () => {
        const fetchConfig = {
            method: "post",
            body: JSON.stringify({
                radius: radius,
                prices: prices.length !== 0  ? prices.join(",") : "1,2,3,4",
                category: 'mexican'
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

    }

    useEffect(() => {
        console.log(prices.length)
        submitSearch();
    }, [])

    const handleRadiusChange = (e) => setRadius(e.target.value);


  return (
    <><div>
      <label>
        Price 1
        <input type="checkbox" id="1" onChange={handlePriceChange} />
      </label>
      <label>
        Price 2
        <input type="checkbox" id="2" onChange={handlePriceChange} />
      </label>
      <label>
        Price 3
        <input type="checkbox" id="3" onChange={handlePriceChange} />
      </label>
      <label>
        Price 4
        <input type="checkbox" id="4" onChange={handlePriceChange} />
      </label>
      <div>
        <button onClick={submitSearch}>Submit</button>
      </div>

      <ul>
        {restaurants.businesses?.map((business) => (
          <li key={business.id}>{business.name}</li>
        ))}
      </ul>
    </div>

    <div>
          <label>
            1 mile
            <input
            type="radio"
            value={"1609"}
            checked={radius === "1609"}
            onChange={handleRadiusChange}
            />
          </label>
          <label>
            5 mile
            <input
            type="radio"
            value={"8047"}
            checked={radius === "8047"}
            onChange={handleRadiusChange}
            />
          </label>
          <label>
            15 mile
            <input
            type="radio"
            value={"24140"}
            checked={radius === "24140"}
            onChange={handleRadiusChange}
            />
          </label>
          <label>
            25 mile
            <input
            type="radio"
            value={"40000"}
            checked={radius === "40000"}
            onChange={handleRadiusChange}
            />
          </label>
    </div>
    </>
  );


}

export default MexicanPage;
