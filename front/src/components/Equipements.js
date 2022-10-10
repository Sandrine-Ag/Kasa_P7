function Equipments({equipments}) {
    return <ul>{equipments.map((el, index) => (
      <li className="" key={`${el}-${index}`}>{el}</li>
    ))}</ul>;
  }
  
  export default Equipments;
  