import {Link} from "react-router-dom";
import header from '../images/transgendersymbolheader.png'

const Header = () => {

    return (
        <div className="header">
            <nav>
                <ul id="ul-nav">
                    <Link to="/restroomsearch" id="nav-restroom-search"><li className="header-li">Restroom Search</li></Link>
                    <img src={header} alt="The transgender symbol" id="header-img" />
                    <Link to="/mylist" id="nav-mylist"><li className="header-li">My Restroom List</li></Link>
                </ul>
            </nav>
            <h1 className="header-text">Restroom Resource: Find All-Gender Restrooms</h1>
        </div>
    )
}

export default Header;

