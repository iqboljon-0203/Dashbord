import "./HomeContent.scss"
import foods from "../../assets/data/food";
///components
import FoodCard from "../FoodCard/FoodCard";
const HomeContent=()=>{
    return <div className="home__content">
            <ul className="home__content__list">
                {
                    foods.map((food)=>(
                        <FoodCard img={food.img}  title={food.title}  price={food.price}  available={food.available}/>
                    ))
                }
            </ul>
        </div>
    
}
export default HomeContent;