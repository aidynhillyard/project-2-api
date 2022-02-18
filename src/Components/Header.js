import { Link } from "react-router-dom";
import header from "../images/transgendersymbolheader.png";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul id="ul-nav">
        <li className="header-li">
          <Link to="/restroomsearch" id="nav-restroom-search">
            Restroom Search
          </Link>
          </li>
          <li id="about-text" className="header-li">
            <div id="nav-about">
              <img src={header} alt="The transgender symbol" id="header-img" />
              <Link to="/about">
                About
              </Link>
              </div>
            </li>
            <li className="header-li">
              <Link to="/mylist" id="nav-mylist">
                My Restroom List
              </Link>
              </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
