import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryPage from "./CategorSearches/mexicanSearch";

const HomePage = () => {
    const [foodType, setFoodType] = useState("");
    const navigate = useNavigate();

    function categoryButton(e) {
        // e.preventDefault();
        setFoodType(e.target.value);
    }

    useEffect(() => {
        if (foodType !== "") {
            navigate(`/category/${foodType}`);
        }
    }, [foodType, navigate]);



return(

    <><div>
        <button onClick={categoryButton} value={'mexican'}>Mexican</button>
    </div><div>
            <button onClick={categoryButton} value={'chinese'}>Chinese</button>
        </div><div>
            <button onClick={categoryButton} value={'bar'}>Bar</button>
        </div><div>
            <button onClick={categoryButton} value={'japanese'}>Japanese</button>
        </div><div>
            <button onClick={categoryButton} value={'thai'}>Thai</button>
        </div><div>
            <button onClick={categoryButton} value={'mediterrian'}>Mediterrian</button>
        </div><div>
            <button onClick={categoryButton} value={'greek'}>Greek</button>
        </div><div>
            <button onClick={categoryButton} value={'italian'}>Italian</button>
        </div></>
)
}
export default HomePage;
