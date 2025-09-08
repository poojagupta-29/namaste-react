// import { resList } from "../utils/mockData";

import RestaurantCard from "./RestaurantCard";
import ShimmerCard from "./Shimmer";

import useBody from "../utils/useBody"; // this is custom hook created for API logic to handle in useBody for Body comp.

const Body = () => {

  const { restaurant, filteredRestaurants, searchText, setSearchText, setFilteredRestaurants } = useBody();

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