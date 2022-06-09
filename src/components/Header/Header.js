import React from "react";
import '../../css/header.css';

function Header() {
    return ( 
        <header className = "wrapper" >
            <div className="header-title">
                <h3 className="header-logo">Cartoon</h3>
            </div>
            <div className="header-input">
                <input type="text" placeholder="Search......"  />
                <div className="menu-dropdown">
                    <a href="#">5 cm/s</a>
                    <a href="#">Ngôi mộ đom đóm</a>
                    <a href="#">your name</a>
                    <a href="#">Conan thám tử lừng danh</a>
                    <a href="#">Naruto Cửu vỹ hồ</a>
                    <a href="#">.....</a>
                </div>
                <button type="submit">Search</button>
            </div>
            {/* <div className="menu-mobile" style={{display:'none'}}>
                <h2>Menu</h2>
                <div className="search-mobile">
                    <button type="submit">Search</button>
                </div>
            </div> */}
    
        </header >
    );
}

export default Header;