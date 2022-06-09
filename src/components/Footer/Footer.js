import React from 'react';
import '../../css/footer.css'

const Footer =() =>{
    return (
        <footer className="footer-wrapper bg-dark">
            <h2 className='footer-title'>Cartoon</h2>
            <div className="footer-group">
                <h3 className='footer-h3' >Phim mới</h3>
                <ul className="footer-list">
                    <li className="footer-item"><a href="https://phimhayttv.com/">Phim mới</a></li>
                    <li className="footer-item"><a href="https://vuighe.net/">Vuighe</a></li>
                    <li className="footer-item"><a href="https://phimhayttv.com/">Phim hay</a></li>
                    <li className="footer-item"><a href="https://luotphim1.com/">LuotPhim</a></li>
                </ul>
            </div>
            <div className="footer-group">
                <h3 className='footer-h3' >Phim Hay</h3>
                <ul className="footer-list">
                    <li className="footer-item"><a href="https://phimok.net/tag/vuiviphimmoi/">Vuiviphimmoi</a></li>
                    <li className="footer-item"><a href="#">Bilu Tv</a></li>
                    <li className="footer-item"><a href="#">MotPhim</a></li>
                    <li className="footer-item"><a href="#">Youtube</a></li>
                </ul>
            </div>
            <div className="footer-group">
                <h3 className='footer-h3' >Phim hay TV</h3>
                <ul className="footer-list">
                    <li className="footer-item"><a href="#">FullPhim</a></li>
                    <li className="footer-item"><a href="#">HDOnline</a></li>
                    <li className="footer-item"><a href="#">Phim14</a></li>
                    <li className="footer-item"><a href="#">Vkool</a></li>
                </ul>
            </div>
        </footer>
    );
}
export default Footer;