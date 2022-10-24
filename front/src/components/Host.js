import "../styles/host.css"

function Host({ host }) {
    return (
      <div className="host">
        <div className="name">{host.name}</div>
        <img src={host.picture} alt={host.name} className="picture" />
      </div>
    );
  }
  
  export default Host;
  