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
      <div className="Logement-first-section">
        <div className="Logement-first-section_infos">
          <h1>{logement.title}</h1>
          <span>{logement.location}</span>
        </div>
        <div className="Logement-first-section_host">
          <span>{logement.host.name}</span>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>
      </div>
      <div className="Logement-second-section">
        <div className="Logement-second-section_tags">
          {logement.tags}
        </div>
        <div className="Logement-second-section_rates">
          {logement.rating}
        </div>
      </div>
      <div className="Logement-third-section">
        <Collapse className="Logement-third-section_details" Title="Description" />
        <Collapse className="Logement-third-section_items" Title="Équipements" />
      </div>
    </section>
  );
}

export default Logement;
