import React, { useState}from "react";
import up from "../assets/vectorUp.png";
import down from "../assets/vectorDown.png";

function Collapse ( { title, content, open } ) {
    const [ active, setActive ] = useState (false);
    return active ? (
        <div className= {open ? "collapse" + open : "collapse" }>
            <div className="container">
                <h3> {title} </h3>
                <img className="up" 
                src = {up} 
                alt = "contenu caché" 
                onClick={() => setActive (false)}/>
            </div>
            {typeof content === "object" ? intoArray(content) : <p> {content} </p> }
        </div>
    ) : (
        <div className="collapse">
            <div className="container">
                <h3> {title} </h3>
                <img className="down"
                src = {down}
                alt = "contenu affiché" 
                onClick={() => setActive (true)}/>
            </div>
        </div>
    )
}

function intoArray (equip) {
    return (
        <ul>
            {equip.map((equipment) => (
                <li key= {equipment}>
                    {equipment}
                </li>
            ))}
        </ul> 
    )
}

export default Collapse ;