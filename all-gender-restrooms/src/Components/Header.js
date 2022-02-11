const Header = () => {

    return (
        <div className="header">
            <nav>
                <ul id="ul-nav">
                    <Link to="/restroomsearch" id="nav-restroom-search"><li className="header-li">Restroom Search</li></Link>
                    <img src="" alt="" className="header-img" />
                    <Link to="/mylist" id="nav-mylist"><li className="header-li">My List</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header;

