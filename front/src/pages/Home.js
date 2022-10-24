import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import bannerHome from "../assets/bannerHome.png";
import "../styles/home.css"

function Home () {
    return (
        <div className="home">
            <Banner
            imageHome = {bannerHome}
            welcomeHome = "Chez vous, partout et ailleurs"
            />
            <Card />
        </div>
    )
}

export default Home;