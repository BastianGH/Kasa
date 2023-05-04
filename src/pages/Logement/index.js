import '../../styles/pages/logement.css';
import { useParams } from "react-router-dom";
import locations from "../../logements.json"

import Carousel from "../../components/Carrousel";
import Collapse from "../../components/Collapse";

function Logement() {
  const { id } = useParams()
  const logement = locations.find(location => location.id === id)

  return (
    <section className="Logement">
      <Carousel images={logement.pictures} />
      <div className="Logement-introduction">
        <div className="Logement-introduction_infos">
          <h1 className="Logement-introduction_infos-title" >{logement.title}</h1>
          <span className="Logement-introduction_infos-location" >{logement.location}</span>
          <div className="Logement-introduction_infos-tags" >
            {logement.tags}
          </div>
        </div>
        <div className="Logement-introduction_host&rate">
          <div className="Logement-introduction_host">
            <span className="Logement-introduction_host-name">{logement.host.name}</span>
            <img className="Logement-introduction_host-photo" src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="Logement-introduction_rating">
            {logement.rating}
          </div>
        </div>
      </div>
      <div className="Logement-details">
        <Collapse className="Logement-details_details" Title="Description" />
        <Collapse className="Logement-details_items" Title="Équipements" />
      </div>
    </section>
  );
}

export default Logement;
