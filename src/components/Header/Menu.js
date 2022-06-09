import React from "react";
import '../../css/menuHeader.css';



function MenuHeader(){
    return(
        <div className="menu">
            <ul className="menu-list">
                <li className="menu-item"><a href="">Trang chủ</a></li>
                <li className="menu-item "><a href="">Thể loại</a></li>
                <li className="menu-item"><a href="">Phim bộ</a></li>
                <li className="menu-item"><a href="">Xem thêm</a></li>
               
            </ul>
        </div>  
    );
}
export default MenuHeader;