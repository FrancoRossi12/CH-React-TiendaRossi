import React from "react"
import CartWidget from "./CartWidget"

function NavBar (){
    return (
        <header>
            <h1>TiendaRossi</h1>
            <nav>
                <ul class="nav_links">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#"><CartWidget/>Carrito</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar