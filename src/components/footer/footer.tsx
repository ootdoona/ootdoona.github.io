import React from 'react';
import './footer.css';
import emoji from 'react-easy-emoji';

function Footer() {
    return (
        <footer>
            <div className="inner">

                <div className="footer-content">
                    <p>{emoji("Make By Username💙")}</p>
                    <p style={{marginTop: "15px"}}>Theme By <a href="https://github.com/Ikalli/ReactFolio">ReactFolio</a></p>
                </div>

            </div>
        </footer>
    );
}
export default Footer;