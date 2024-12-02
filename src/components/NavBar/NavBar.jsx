import CartWidget from "./CartWidget"
import "./navbar.scss"

const NavBar = () => {

    return(
        <nav className="navbar"> 
            <div className="brand">
                <img src="../../../public/img/logo3.png" alt="" />
            </div>
            <ul className="categories">
                <li>Remeras</li>
                <li>Tazas</li>
                <li>Cds</li>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default NavBar