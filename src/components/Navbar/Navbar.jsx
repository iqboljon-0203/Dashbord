import "./Navbar.scss"
import { NavLink } from "react-router-dom";
const Navbar=()=>{
    return (
        <div>
            <ul className="nested__link">
                <li className="nested__link__item">
                    <NavLink className="nested__link__link" to="/dishes">Hot dishes</NavLink>
                </li>
                <li className="nested__link__item">
                    <NavLink className="nested__link__link" to="/dishes">Cold Dishes</NavLink>
                </li>
                <li className="nested__link__item">
                    <NavLink className="nested__link__link" to="/dishes">Soup</NavLink>
                </li>
                <li className="nested__link__item">
                    <NavLink className="nested__link__link" to="/dishes">Grill</NavLink>
                </li>
                <li className="nested__link__item">
                    <NavLink className="nested__link__link" to="/dishes">Appetizer</NavLink>
                </li>
                <li className="nested__link__item">
                    <NavLink className="nested__link__link" to="/dishes">Dessert</NavLink>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;