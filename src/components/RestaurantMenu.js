import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { allMenuData, menuData } = useRestaurantMenu();

    return (
        <div className="menu-card-container">
            <h1 className="menu-title">{allMenuData?.data?.cards[2]?.card?.card?.info?.name}
            </h1>

            {
                menuData.map(menuitems => {
                    return (
                        <div className="menu-items" key={menuitems.card.info.id}>
                            <div className="indicator" style={{ border: menuitems.card.info.itemAttribute.vegClassifier === "NONVEG" ? '2px solid #E43B4F' : '2px solid #0f8a65' }}>
                                <span style={{ backgroundColor: menuitems.card.info.itemAttribute.vegClassifier === "NONVEG" ? '#E43B4F' : '#0f8a65' }}></span>
                            </div>
                            <div className="menu-card">
                                <div className="card-content">
                                    <h3>{menuitems.card.info.name}</h3>
                                    <div className="price">₹{menuitems.card.info.price}</div>
                                    <div className="rating">⭐ {menuitems.card.info.ratings.aggregatedRating.rating}
                                        <span>
                                            {menuitems.card.info.ratings.aggregatedRating.ratingCountV2
                                                ? (menuitems.card.info.ratings.aggregatedRating.ratingCountV2) : ""}</span>
                                    </div>
                                    <div className="desc">
                                        {menuitems.card.info.description}
                                    </div>
                                </div>

                                <div className="card-image">
                                    <img src="https://i.imgur.com/c7tQYtM.jpg" alt="Schezwan Fried Rice" />
                                    <button className="add-btn">ADD</button>
                                    <div className="customisable">Customisable</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RestaurantMenu