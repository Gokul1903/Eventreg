import { useEffect, useState } from "react";
import Card from "./Card";

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  // Separate the cards into two lists
  const offStageEvents = cards.filter((card) => card.id <= 4);
  const onStageEvents = cards.filter((card) => card.id > 4);

  return (
    <>
      {/* OFF STAGE EVENTS */}
      <section className=" py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12 d-flex justify-content-center">
              <h1 className="stage-title pb-3">OFF STAGE EVENTS</h1>
            </div>
            {offStageEvents.map((card) => (
              <div className="col-md-3" key={card.id}>
                <Card title={card.title} description={card.description} image={card.image} id={card.id} fileUrl={card.fileUrl} time={card.time}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ON STAGE EVENTS */}
      <section className="bg-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12 d-flex justify-content-center">
              <h1 className="stage-title pb-3">ON STAGE EVENTS</h1>
            </div>
            {onStageEvents.map((card) => (
              <div className="col-md-3" key={card.id}>
                <Card title={card.title} description={card.description} image={card.image} id={card.id} fileUrl={card.fileUrl} time={card.time}/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CardList;
