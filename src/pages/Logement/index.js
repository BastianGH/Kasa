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
      <div>
        <div>
          <h1>{logement.title}</h1>
          <span>{logement.location}</span>
        </div>
        <div>
          <span>{logement.host.name}</span>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>
      </div>
      <div>
        <div>
          tags
        </div>
        <div>
          note
        </div>
      </div>
      <Collapse />
    </section>
  );
}

export default Logement;
