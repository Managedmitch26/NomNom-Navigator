import { useState, useEffect, useCallback } from "react";

function MexicanPage() {
    const [radius, setRadius] = useState("");
    const [price1, setPrice1] = useState(true);
    const [price2, setPrice2] = useState(true);
    const [price3, setPrice3] = useState(true);
    const [price4, setPrice4] = useState(true);
    const [restaurants, setRestaurants] = useState({});

    const submitSearch = async () => {

        let selectedPrices = [];
            if (price1) selectedPrices.push('1');
            if (price2) selectedPrices.push('2');
            if (price3) selectedPrices.push('3');
            if (price4) selectedPrices.push('4');

        const fetchConfig = {
            method: "post",
            body: JSON.stringify({
                radius: radius,
                price: selectedPrices.join(","),
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
        submitSearch();
    }, [])

    const handlePrice1Change = () => setPrice1(!price1);
    const handlePrice2Change = () => setPrice2(!price2);
    const handlePrice3Change = () => setPrice3(!price3);
    const handlePrice4Change = () => setPrice4(!price4);

  return (
    <div>
      <label>
        Price 1
        <input type="checkbox" checked={price1} onChange={handlePrice1Change} />
      </label>
      <label>
        Price 2
        <input type="checkbox" checked={price2} onChange={handlePrice2Change} />
      </label>
      <label>
        Price 3
        <input type="checkbox" checked={price3} onChange={handlePrice3Change} />
      </label>
      <label>
        Price 4
        <input type="checkbox" checked={price4} onChange={handlePrice4Change} />
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
  );


}

export default MexicanPage;

// NEXT STEPS:
//     ISOLATE INFORMATION COMING IN FROM API CALL
//     TEST FILTERS TO SEE IF THEY MAKE NEW ACCURATE CALLS
//     ROUGH DISPLAY OF INFORMATION (TRY FOR TOP 10, AT LEAST ONE)
