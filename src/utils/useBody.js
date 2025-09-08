import { useState, useEffect } from "react";

const useBody = () => {
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

    return { restaurant, filteredRestaurants, searchText, setSearchText, setFilteredRestaurants };
}

export default useBody;