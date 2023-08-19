import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <nav>
            <ul> La tiendita de los horrores
                <a href="">Home</a>
                <a href="">Productos</a>
                <a href="">¿Quienes somos?</a>
                <a href="">Contacto</a>
                <a href="">Contacto</a>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;