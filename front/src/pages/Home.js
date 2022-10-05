import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
// import Footer from "../components/Footer";
import bannerHome from "../assets/bannerHome.png";

function Home () {
    return (
        <div className="Home">
            <Banner
            imageHome = {bannerHome}
            welcomeHome = "Chez vous, partout et ailleurs"
            />
            <Card />
            

        </div>
    )
}

export default Home;