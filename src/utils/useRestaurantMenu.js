import { MENU_URL } from "../utils/common"
import { useState, useEffect, use } from "react"
import { useParams } from "react-router"


const useRestaurantMenu = () => {
    const [allMenuData, setAllMenuData] = useState([])
    const [menuData, setMenuData] = useState([])
    const { resId } = useParams();

    useEffect(() => {
        fetchMenuData();
    }, [])

    const fetchMenuData = async () => {
        try {
            const res = await fetch(`${MENU_URL}${resId}`);
            const resData = await res.json();
            const menuResData = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
            console.log(resData.data.cards[2].card.card.info)
            setAllMenuData(resData)
            setMenuData(menuResData)
        } catch (error) {
            console.log("Error: " + error)
        }
    }

    return { allMenuData, menuData }
}

export default useRestaurantMenu;