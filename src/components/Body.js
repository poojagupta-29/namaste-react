import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const data = resList.restaurants;

  const [restaurant, setRestaurant] = useState(data)

  return (
    <div className="wrapper" style={{minHeight: "100vh"}}>
      {/* <div className="search">
        <input type="text" name="search" id="search" placeholder="Search...." /> 
      </div> */}

      <button className="filter-btn" 
        onClick={ () => setRestaurant(data.filter(resfilter => resfilter.rating >= 4.6)) }
      >
        Top Restaurants
      </button>
      
      <div className="restaurant-container">
        {
          restaurant.map( (restaurant) => {
            return(
              <RestaurantCard key={restaurant.id} resData={restaurant} /> 
            )          
          })
        }
      </div>      

    </div>
  )
}

export default Body