import Dropdown from "./Dropdown";
import Tag from "./Tag";
import Host from "./Host";
import Rate from "./Rate";

function Description ({
    title, description, host, rating, location, equipments, tags,
}) {
    return (
        <div className="info">
            <div className="card1">
                <h1 className="title">{title}</h1>
                <p className="location">{location}</p>
                <Tag tags={tags} />
            </div>
            <div className="card2">
                <Host host = {host} />
                <Rate rate = {rating} />
            </div>
            <div className="dropdown-box">
                <Dropdown type='locationList' typeListName="Description" description={description} />
                <Dropdown type='locationList' typeListName="Equipements" equipments={equipments} />
            </div>
        </div>
    )
}

export default Description ;