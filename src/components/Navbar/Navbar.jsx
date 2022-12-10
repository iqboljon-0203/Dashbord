import "./Navbar.scss"
import { NavLink } from "react-router-dom";
const Navbar=()=>{
    return (
        <div>
            <ul className="nested__link">
                <li className="nested__link__item">
                    <NavLink activeClassName="nested__link__link-active" className="nested__link__link" to="/" exact>Hot dishes</NavLink>
                </li>
                <li className="nested__link__item">
                    <NavLink activeClassName="nested__link__link-active" className="nested__link__link" to="/cold-dishes">Cold Dishes</NavLink>
                </li>
                <li className="nested__link__item">
                    <NavLink activeClassName="nested__link__link-active" className="nested__link__link" to="/soup">Soup</NavLink>
                </li>
                <li className="nested__link__item">
                    <NavLink activeClassName="nested__link__link-active" className="nested__link__link" to="/grill">Grill</NavLink>
                </li>
                <li className="nested__link__item">
                    <NavLink activeClassName="nested__link__link-active" className="nested__link__link" to="/appetizer">Appetizer</NavLink>
                </li>
                <li className="nested__link__item">
                    <NavLink activeClassName="nested__link__link-active" className="nested__link__link" to="/dessert">Dessert</NavLink>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;