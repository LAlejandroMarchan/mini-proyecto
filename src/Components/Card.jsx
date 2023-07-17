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
        <div className="card" key={i}>
          <img src={stay.photo} alt="Imagen" />
          <div className="card-details">
            <span>{stay.city}, {stay.country}</span>
            {stay.superHost && <span>Superhost</span>}
            <h2>{stay.title}</h2>
            <div className="card-info">
              <span>{stay.rating}</span>
              <span>{stay.maxGuests} guests</span>
              <span>{stay.beds} beds</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;