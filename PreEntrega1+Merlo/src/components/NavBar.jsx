import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <nav className="nav">
            <ul className="nav-item"> La tiendita de los horrores
                <a className='nav-link' href="">Home</a>
                <a className='nav-link' href="">Productos</a>
                <a className='nav-link' href="">¿Quienes somos?</a>
                <a className='nav-link' href="">Contacto</a>
                <a className='nav-link' href="">Contacto</a>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;