// import { resList } from "../utils/mockData";

import RestaurantCard from "./RestaurantCard";
import ShimmerCard from "./Shimmer";


import { useState, useEffect } from "react";

const Body = () => {

  const [restaurant, setRestaurant] = useState([])

  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    console.log("Body useEffect rendered")
  }, [])

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const apiData = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const res = await apiData.json();
      const resData = res?.data?.cards.find((c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants)?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setRestaurant(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log("API Error: " + error)
    }
  }

  return (
    <div className="wrapper" style={{ minHeight: "100vh" }}>

      <div className="search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search...."
          value={searchText}
          onChange={(e) => {
            const value = e.target.value;
            setSearchText(value)

            if (value === "") {
              setFilteredRestaurants(restaurant)
            } else {
              setFilteredRestaurants(
                restaurant.filter(res =>
                  res.info.name.toLowerCase().includes(value.toLowerCase())
                )
              );
            }
          }}
        />
        {/* <button className="btn">
          Search
        </button> */}
      </div>

      <button className="filter-btn"
        onClick={() => setFilteredRestaurants(restaurant.filter(resfilter => resfilter.info.avgRating >= 4.4))}
      >
        Top Restaurants
      </button>

      {
        restaurant && restaurant.length === 0 ?

          <div className="shimmer-container">
            {Array(10).fill("").map((_, i) => <ShimmerCard key={i} />)}
          </div>

          :

          <div className="restaurant-container">
            {

              (filteredRestaurants.length === 0) ?
                <>No Results Found for {searchText}</> :

                (filteredRestaurants.length > 0 ? filteredRestaurants : restaurant).map((item) => {
                  return (
                    <RestaurantCard key={item.info.id} resData={item.info} />
                  )
                })
            }
          </div>
      }
    </div>
  )
}

export default Body