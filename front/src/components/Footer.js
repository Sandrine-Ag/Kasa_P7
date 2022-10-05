import React from "react";
import logoFooter from "../assets/logoFooter.svg";

function Footer() {
    return (
        <div className="footer">
            <img className="logofooter" src={logoFooter} alt= "logo de Kasa" />
            <div className="copyright">© 2022 Kasa. All rights reserved</div>
        </div>
    )
}

export default Footer;