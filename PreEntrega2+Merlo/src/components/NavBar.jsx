import CartWidget from "./CartWidget";
import { NavLink, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const NavBar = () => {

    return (
        <nav className="nav">
            <NavLink to='/'><img src="/lsoh_logo.png" alt="little shop of horrors logo" className="nav-logo" /></NavLink>
            <ul className="nav-item">
                <NavLink className='nav-link' to={`/item/1`}>Productos</NavLink>
                <NavLink className='nav-link' to=''>¿Quienes somos?</NavLink>
                <NavLink className='nav-link' to=''>Contacto</NavLink>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;