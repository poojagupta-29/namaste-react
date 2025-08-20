
const RestaurantCard = (props) => {

  const { resData } = props;

  const {image, name, cuisine, rating, deliveryTime, location} = resData;

  return (
    <div className="res-items">
      <img src={image} alt="" />
      <div className="item-info">
        <h3>{name}</h3>
        <div className="cusines"><i>{cuisine}</i></div>
        <p>{rating} rating</p>.<span>{deliveryTime} mins</span>
        {/* <span className="company-name">Pizzas</span> */}
        <span className="location">{location}</span>
      </div>      
    </div>  
  )
}

export default RestaurantCard;