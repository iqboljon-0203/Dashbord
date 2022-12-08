import "./Main.scss"
import Date from "../../utils/functions/date";
const Main = ()=>{
    return(
        <div className="home__top">
            <div className="home__top__header">
                <div className="home__top__info">
                    <h1 className="home__top__title">Jaegar Resto</h1>
                    <p className="home__top__text">
                        {Date()}
                    </p>
                </div>
                <form className="home__form">
                    <label className="home__label">
                        <input className="home__input" type="search" placeholder="Search for food,coffee,etc..." />
                    </label>
                </form>
            </div>
        </div>
    )
}
export default Main;