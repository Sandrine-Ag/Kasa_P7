import React, { useState} from "react";
import vectorRight from "../assets/vectorRight.png";
import vectorLeft from "../assets/vectorLeft.png";
import { useParams, Navigate } from "react-router-dom";
import JSON from "../JSON/Logement.json"
import "../styles/slideshow.css"

function Slideshow (id) {
    const [current, setCurrent] = useState(0);
    const urlParams = useParams();
    const logementData = JSON.filter((data) => data.id === urlParams.id);
    const lengthArray = logementData.map((data) => data.pictures.length);
    
    if (logementData === []) {
        return <Navigate to="*" />;
    }
    const nextSlide = () => {
        setCurrent(current === lengthArray - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? lengthArray - 1 : current - 1);
    };

    return (
    <>
        {logementData &&
        logementData.map((location, index, id) => (
            <div className = "show" key={`${index}-${location.id}`}>
                <div className="slides">
                    {location.pictures.map((picture, index) => (
                    <div className={index === current ? "slide active" : "slide"} key={index}>
                        {index === current && (
                            <img className="imageSlide"
                            src={picture}
                            alt={location.title}
                            key={`${index}-${id}`}
                            />
                        )}
                    </div>
                    ))}
                </div>

                <img className={lengthArray > 1 ? "arrow-left" : "hide"}
                src={vectorLeft}
                alt="left arrow"
                key={`${index}-${id}-arrow-left`}
                onClick={prevSlide}
                />

                <img className={lengthArray > 1 ? "arrow-right" : "hide"}
                src={vectorRight}
                alt="right arrow"
                key={`${index}-${id}-arrow-right`}
                onClick={nextSlide}
                />

                <div className="page">
                {current + 1}/{lengthArray}
                </div>
            </div>
        ))}
    </>
    );
}

export default Slideshow ;


