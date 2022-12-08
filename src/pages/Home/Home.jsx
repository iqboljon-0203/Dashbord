import "./Home.scss"
import Navbar from "../../components/Navbar/Navbar";
import Main from "../../components/Main/Main";
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
            </div>
            <div className="home__right">
                Right
            </div>
        </header>
    )
}
export default Home;