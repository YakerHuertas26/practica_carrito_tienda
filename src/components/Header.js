import { NavLink } from "react-router-dom";
import { Menu } from "../styles/HeaderStyle";

const Header = () => {
    return ( 
        
            <Menu>
                <NavLink to={"/"}>Inicio</NavLink>
                <NavLink  to={"/Blog"}>Blog</NavLink>
                <NavLink to={"/Tienda"}>Tienda</NavLink>
            </Menu>
        
    );
}

export default Header;