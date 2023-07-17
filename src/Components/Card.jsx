import { useEffect, useState } from "react";


function Card() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
     getData();
  }, []);

  return (
    <div className="cards-container">
      {data.map((stay, i) => (
        <div className="card" key={i} style="width: 18rem">
          <img className="card-img-top" src={stay.photo} alt="Imagen" />
          <div className="card-body flex flex-row">
            {stay.superHost && <span className="super">Superhost</span>}
            <span>{stay.type}</span>
            <span>{stay.rating}</span>
            <span>{stay.maxGuests} guests</span>
            <span>{stay.beds} beds</span>
          </div>
          <h5 className="card-title">{stay.title}</h5>
        </div>
      ))}
    </div>
  );
}

export default Card;