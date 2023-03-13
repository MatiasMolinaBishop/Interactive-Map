import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <div class='links-style'>
                <Link className="link-color-about" to='/'>Home</Link>
                <Link className="link-color-about" to='/map'>Map</Link>
                <Link className="link-color-about"  to="/profile">Profile</Link>
            </div>
        </div>
    )
}

export default NavBar