import { useParams } from "react-router-dom";

function Logement() {
  const { id } = useParams()

  return (
    <div className="Logement">
        Ceci est le logement {id}
    </div>
  );
}

export default Logement;
