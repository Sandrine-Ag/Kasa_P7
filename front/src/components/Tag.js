import "../styles/tag.css"


function Tag({tags}) {
    return (
        <ul className="tag-box">
            {tags.map((tag) => (
                <li className="tag" key={tag}>{tag}</li>
            ))}
        </ul>
    )
}

export default Tag