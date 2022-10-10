import React, { useState} from "react";
import vectorRight from "../assets/vectorRight.png";
import vectorLeft from "../assets/vectorLeft.png";
import { useParams, Navigate } from "react-router-dom";
import JSON from "../JSON/Logement.json"




// function Sliders ({pictures}) {
//     const [ current, setCurrent] = useState(0);

//     const nextSlide = () => {
//         setCurrent(current === pictures.length - 1 ? 0 : current + 1);
//     };
    
//     const prevSlide = () => {
//         setCurrent(current === 0 ? pictures.length - 1 : current - 1);
//     };

//     return (
//         <div className="sliders">
//             <span className={vectorLeft}  onClick={prevSlide}></span>
//             <span className={vectorRight}  onClick={nextSlide}></span>
//             {pictures.map((slide, index) => (
//                 <div className={ index === current ? "slide__active" : "slide__inactive"
//                 }
//                 key={index}
//                 >
//                 {index === current && (
//                     <img
//                     src={slide}
//                     alt={`slide-${index}`}
//                     key={`slide-${index}`}
//                     className="slide__image"
//                     />
//                 )}
//                 </div>
//             ))}
//         </div>
//     )
// }

function Sliders (id) {
    const [current, setCurrent] = useState(0);

  const urlParams = useParams();

  const locationData = JSON.filter((data) => data.id === urlParams.id);

  const lengthArray = locationData.map((data) => data.pictures.length);
  

  if (locationData === []) {
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
      {locationData &&
        locationData.map((location, index, id) => (
        <div className = "show" key={`${index}-${location.id}`}>
            <div className="slide">
              {location.pictures.map((picture, index) => (
                <div
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <img
                      className="imageSlide"
                      src={picture}
                      alt={location.title}
                      key={`${index}-${id}`}
                    />
                  )}
                </div>
              ))}
            </div>

            <img
              className={lengthArray > 1 ? "arrow-left" : "hide"}
              src={vectorLeft}
              alt="left arrow"
              key={`${index}-${id}-arrow-left`}
              onClick={prevSlide}
            />

            <img
              className={lengthArray > 1 ? "arrow-right" : "hide"}
              src={vectorRight}
              alt="right arrow"
              key={`${index}-${id}-arrow-right`}
              onClick={nextSlide}
            />

            <div className="pagination">
              {current + 1}/{lengthArray}
            </div>
            </div>
        ))}
    </>
  );

}

export default Sliders ;