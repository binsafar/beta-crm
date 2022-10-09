import {Link} from "react-router-dom";

import "./css/header/header.css";

const Header = () => {
    return (
        <ul>
            <Link to={"/"}>home</Link>
            <Link to={"/about"}>about</Link>
            <Link to={"/services"}>services</Link>
            <Link to={"/contacts"}>contacts</Link>
            <Link to={"/career"}>career</Link>
        </ul>
    )
}
export default Header;