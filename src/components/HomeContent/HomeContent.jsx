import "./HomeContent.scss"
import foods from "../../assets/data/food";
///components
import FoodCard from "../FoodCard/FoodCard";
import { useParams } from "react-router-dom";
const HomeContent=()=>{
    const {dishtype}=useParams()
    return <div className="home__content">
            <ul className="home__content__list">
                {
                    foods.filter(food=>{
                        if(dishtype){
                            return food.type===dishtype;
                        }
                        return food.type==="hot-dishes";
                    }).map((food)=>(
                        <FoodCard img={food.img}  title={food.title}  price={food.price}  available={food.available}/>
                    ))
                }
            </ul>
        </div>
    
}
export default HomeContent;