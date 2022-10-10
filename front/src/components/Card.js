import React from "react";
import { Link } from "react-router-dom";
import JSON from "../JSON/Logement.json"
import "../styles/card.css"

function Card () {
    return (
        <div className="cards">
            {JSON.map ((element) => (
                <Link to = { `location/${element.id}`} 
                    key = {element.id} 
                    className="card"
                >
                    <img src = { element.cover } alt = { element.title } />
                    <p> { element.title }</p>
                </Link>
            ))}
        </div> 
    )
    // return (
    //     <div className="cards">
    //         {JSON.map((element) => (
    //             <Link to = {`/location/${element.id}` }
    //             key = {element.id}
    //             className = "card"
    //             >
    //                 <div className="title-card">
    //                     {`${element.title}`}
    //                 </div>
    //             </Link>
    //         ))}
    //     </div>
    // )
}

export default Card;