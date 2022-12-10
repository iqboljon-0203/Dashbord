import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Library/svg/Logo";
import Menu from "../Library/svg/Menu";
import Logout from "../Library/svg/Logout";
const Sidebar= () =>{
    const handleAddClass=(evt)=>{
        const links=document.querySelectorAll(".active");
        links.forEach(link=>{
            link.classList.remove("active");
        })
        evt.currentTarget.classList.add("active")
    }
    return (
        <div className="sidebar">
            <Link className="logo" to="/"><Logo/></Link>
            <ul className="sidebar__list">
                    <li className="sidebar__item">
                        <NavLink onClick={handleAddClass} className='sidebar__link active' to='/'>
                            <span className="sidebar__link-item">
                                <Menu/>
                            </span>
                        </NavLink>
                    </li>
                    <li className="sidebar__item">
                        <NavLink onClick={handleAddClass} className='sidebar__link' to='/discount'  exact>
                        <span className="sidebar__link-item">
                            <Menu/>
                        </span>
                        </NavLink>
                    </li>
                    <li className="sidebar__item">
                        <NavLink onClick={handleAddClass} className='sidebar__link' to='/graph'  exact>
                            <span className="sidebar__link-item">
                                <Menu/>
                            </span>
                        </NavLink>
                    </li>
                    <li className="sidebar__item">
                        <NavLink onClick={handleAddClass} className='sidebar__link' to='/order'  exact>
                            <span className="sidebar__link-item">
                                <Menu/>
                            </span>
                        </NavLink>
                    </li>
                    <li className="sidebar__item">
                        <NavLink onClick={handleAddClass} className='sidebar__link' to='/notification'  exact>
                            <span className="sidebar__link-item ">
                                <Menu/>
                            </span>
                        </NavLink>
                    </li>
                    <li className="sidebar__item">
                        <NavLink onClick={handleAddClass} className='sidebar__link' to='/settings'  exact>
                            <span className="sidebar__link-item">
                                <Menu/>
                            </span>
                        </NavLink>
                    </li>
            </ul>
            <button className="sidebar__button">
                <Logout />
            </button>
        </div>
    )
}
export default Sidebar;