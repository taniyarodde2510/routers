import { Link, NavLink } from "react-router-dom";

function Navbar ()
{
    return(
        <>
        <ul className="nav  navbar">
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/user" >User</NavLink></li>
            <li><NavLink to="/about" >About</NavLink></li>
            <li><NavLink to="/contact" >Contact</NavLink></li>
        </ul>
        </>

    )
}
export default Navbar;