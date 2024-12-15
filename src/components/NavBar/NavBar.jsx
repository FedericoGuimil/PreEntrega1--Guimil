import CartWidget from "./CartWidget"
import "./navbar.scss"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {

    return(
        <nav className="navbar"> 
            <Link to="/" className="brand">
                <img src="../../../public/img/logo3.png" alt="" />
            </Link>
            <ul className="categories">
                <NavLink to= "/category/remeras" className={ ( { isActive } ) => isActive ? "category-active" : "category" } >Remeras</NavLink>
                <NavLink to= "/category/tazas" className={ ( { isActive } ) => isActive ? "category-active" : "category" } >Tazas</NavLink>
                <NavLink to= "/category/cds" className={ ( { isActive } ) => isActive ? "category-active" : "category" } >Cds</NavLink>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default NavBar