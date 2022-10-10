function Host({ host }) {
    return (
      <div className="host">
        <div className="host__name">{host.name}</div>
        <img src={host.picture} alt={host.name} className="host__picture" />
      </div>
    );
  }
  
  export default Host;
  