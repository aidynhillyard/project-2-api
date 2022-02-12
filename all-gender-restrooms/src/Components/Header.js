import {Route, Link, Routes, Navigate} from "react-router-dom";

const Header = () => {

    return (
        <div className="header">
            <nav>
                <ul id="ul-nav">
                    <Link to="/restroomsearch" id="nav-restroom-search"><li className="header-li">Restroom Search</li></Link>
                    <img src="https://images2.imgbox.com/92/7d/4kRGTKuM_o.png" alt="The transgender symbol" id="header-img" />
                    <Link to="/mylist" id="nav-mylist"><li className="header-li">My List</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header;

