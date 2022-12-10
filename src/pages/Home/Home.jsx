import "./Home.scss"
import Navbar from "../../components/Navbar/Navbar";
import Main from "../../components/Main/Main";
import HomeContent from "../../components/HomeContent/HomeContent";
const Home=()=>{
    return (
        <header className="home">
            <div className="home__left">
                <main>
                    <Main />
                </main>
                <nav>
                    <Navbar/>
                </nav>
                <div className="home__middle">
                    <h2 className="home__middle__title">Choose dishes</h2>
                    <select className="home__middle__select">
                        <option className="home__middle__select__option" value="dignIn" selected>Dign In</option>
                        <option className="home__middle__select__option" value="dignOut">Dign Out</option>
                    </select>
                </div>
                <HomeContent/>
            </div>
            <div className="home__right">
                Right
            </div>
        </header>
    )
}
export default Home;