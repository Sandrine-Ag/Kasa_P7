import React, {useEffect} from "react";
import { useNavigate, useParams} from "react-router-dom";
import Sliders from "../components/Sliders";
import Description from "../components/Description";
import JSON from "../JSON/Logement.json";

function Location() {
    const { id } = useParams();
    const navigate = useNavigate ();
    const logApparts = JSON.filter (function (location) {
        return location.id === id;
    })

    useEffect (() => {
        if (logApparts.length === 0) {
            navigate ("*")
        }
    },);

    return (
        <div className="location">
            {logApparts.map(
        ({
            id, title, pictures, description, host, rating, location, equipments, tags,
        }) => (
          <div key={`description-${id}`}>
            <Sliders pictures={pictures} />
            <Description
              description={description}
              equipments={equipments}
              host={host}
              id={id}
              location={location}
              rating={rating}
              tags={tags}
              title={title}
            />
          </div>
        )
      )}
    </div>
    )


}

export default Location;
