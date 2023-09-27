import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    return (
        <nav className="nav">
            <NavLink to='/'><img src="/lsoh_logo.png" alt="little shop of horrors logo" className="nav-logo" /></NavLink>
            <ul className="nav-menu">
                <NavLink className='nav-link' to='/'>Catalogo</NavLink>
                <NavLink className='nav-link' to='/category/womens_clothing'>Ropa Mujer</NavLink>
                <NavLink className='nav-link' to='/category/mens_clothing'>Ropa Hombre</NavLink>
                <NavLink className='nav-link' to='/category/jewelery'>Joyas</NavLink>
                <NavLink className='nav-link' to='/category/electronics'>Electronica</NavLink>
            </ul>
            <NavLink className='nav-link' to='/cart'><CartWidget /></NavLink>
        </nav>
    )
}

export default NavBar;