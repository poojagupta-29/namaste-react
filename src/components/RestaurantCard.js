import { IMAGE_URL } from "../utils/common";
import { Link } from "react-router";

const RestaurantCard = (props) => {

  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, areaName } = resData;

  return (
    <Link to={`/restaurant/${resData.id}`}>
      <div className="res-items">
        <img src={IMAGE_URL + cloudinaryImageId} alt="" />
        <div className="item-info">
          <h3>{name}</h3>
          <div className="cusines"><i>{cuisines.join(', ')}</i></div>
          <p>{avgRating} rating</p>. <br /> Delivery in <span>{sla?.deliveryTime} mins</span>
          <span className="location">{areaName}</span>
        </div>
      </div>
    </Link>
  )
}

export default RestaurantCard;