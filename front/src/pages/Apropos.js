import React from "react";
// import Footer from "../components/Footer";
import Banner from "../components/Banner";
import bannerApropos from "../assets/bannerApropos.png";
import AproposPage from "../components/AproposPage";

function Apropos () {
    return (
        <div className="apropos">
            <Banner 
            imageHome={bannerApropos}
            welcomeHome="calut" />
            <AproposPage />
        </div>    
    )
}

export default Apropos;