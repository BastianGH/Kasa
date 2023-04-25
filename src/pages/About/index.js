import '../../styles/pages/about.css';
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import aboutBanner from "../../assets/imgs/about.jpeg";

function About() {
  const values = [
    {
      id: 0,
      title: "Fiabilité",
      paragraph: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
      id: 1,
      title: "Respect",
      paragraph: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      id: 2,
      title: "Service",
      paragraph: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
      id: 3,
      title: "Sécurité",
      paragraph: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ]

  return (
    <div className="About" >
        <Banner Img={aboutBanner} Title="" />
        <div className="values-container" >
            {values.map((value) => (
              <Collapse key={value.id} Title={value.title} Paragraph={value.paragraph} />
            ))}
        </div>        
    </div>
  );
}

export default About;
