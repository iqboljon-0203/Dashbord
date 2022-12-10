import "./FoodCard.scss";
const FoodCard=({img,title,price,available})=>{
    return (
        <li className="food__item">
            <img src={img} alt="img"/>
            <h3>{title}</h3>
            <span>
                $ {price}
            </span>
            <p>{available} Bowls available</p>
        </li>
    )
}
export default FoodCard;