import React from "react";
import vectorUp from "../assets/vectorUp.png";
import vectorDown from "../assets/vectorDown.png";

function Dropdown ({ titre, texte, active, setActive }) {
    return (
        <div className="dropdown">
            <div className="dropdownSet">
                <div className="contentDropdown">
                    <h3>{titre}</h3>
                    <span
                        onClick={() => {
                            setActive(active ===titre ? "" : titre);
                        }}>
                            {active === titre ? (
                                <img src = {vectorUp} alt="vectorUp" />
                            ) : (
                                <img src = {vectorDown} alt = "vectorDown" />
                            )}
                    </span>
                </div>
            </div>
            <div className={(active === titre ? "show" : "") + " dropdownContent"}>
                <div className="texte">{texte}</div>
            </div>
        </div>
    )
}

export default Dropdown;