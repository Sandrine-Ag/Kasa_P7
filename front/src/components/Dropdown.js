import React, {useState} from "react";
import Equipments from "./Equipements";
// import vectorUp from "../assets/vectorUp.png";
// import vectorDown from "../assets/vectorDown.png";

function Dropdown ({ titre, texte, type, description, equipments, typeListName }) {
    const [collapse, setCollapse] = useState(true);
  const toggleCollapse = () => setCollapse((prevExpand) => !prevExpand);
  const rightList = typeListName === "Description" ? <div>{description}</div> : <Equipments equipments={equipments}/>;

  if (type !== "locationList") {
    return (
      <div className="dropdown">
        <div className="dropdown__header" onClick={toggleCollapse}>
          {titre}
          <span className="dropdown__header__icon">
            <i
              className={collapse ? "fa fa-chevron-up" : "fa fa-chevron-down"}
              ></i>
          </span>
        </div>
        {collapse && <div className="dropdown__content">{texte}</div>}
      </div>

    );
  }

  return (
    <div className="dropdown">
      <div className="dropdown__header" onClick={toggleCollapse}>
        {typeListName}
        <span className="dropdown__header__icon">
          <span
            className={collapse ? "fa fa-chevron-up" : "fa fa-chevron-down"}
          ></span>
        </span>
      </div>
      {collapse &&
      <div className="dropdown__content">{rightList}</div>}
    </div>
  );
    // return (

    //     <div className="dropdown">
    //         <div className="dropdownSet">
    //             <div className="contentDropdown">
    //                 <h3>{titre}</h3>
    //                 <span
    //                     onClick={() => {
    //                         setActive(active ===titre ? "" : titre);
    //                     }}>
    //                         {active === titre ? (
    //                             <img src = {vectorUp} alt="vectorUp" />
    //                         ) : (
    //                             <img src = {vectorDown} alt = "vectorDown" />
    //                         )}
    //                 </span>
    //             </div>
    //         </div>
    //         <div className={(active === titre ? "show" : "") + " dropdownContent"}>
    //             <div className="texte">{texte}</div>
    //         </div>
    //     </div>
    // )
}

export default Dropdown;