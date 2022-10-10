import starColor from "../assets/starColor.png";
import starWhite from "../assets/starWhite.png";
import JSON from "../JSON/Logement.json"
import { useParams, Navigate } from "react-router-dom";

function Rate () {
    const urlParams = useParams();
    const locationData = JSON.filter((data) => data.id === urlParams.id);
    if (locationData === []) {
        return <Navigate to="*" />;
    }
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="staring">
        {locationData.map((star, index) =>
            stars.map((stars) =>
                star.rating <= stars - 1 ? (
                    <img src={starWhite} alt="empty-star" key={`${index}-${stars}`} />
                    ) : (
                    <img src={starColor} alt="full-star" key={`${index}-${stars}`} />
                    )
            )
        )}
        </div>
    )
}



// function Rate ({ rating}) {
//     const stars = [1,2,3,4,5]
//     return(
//         <div className="rate">
//             {stars.map((starange) =>
//             rating >= starange ? (
//                 <img key = {starange} src = {starColor} alt = "starColor" className="starColor" /> 
//             ) : (
//                 <img key = {starange} src = {starWhite} alt = "starWhite" className="starWhite" /> 
//             ))}
//         </div>
//     )
// }

export default Rate;