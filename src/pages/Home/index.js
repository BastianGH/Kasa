import '../../styles/pages/home.css';
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import locations from "../../logements.json"
import homeBanner from "../../assets/imgs/home.jpeg";

function Home() {
  return (
    <div class="Home" >
        <Banner Img={homeBanner} Title="Chez vous, partout et ailleurs" />
        <div class="locations-container" >
            {locations.map((location) => (
              <Card Location={location}/>
            ))}
        </div>        
    </div>
  );
}

export default Home;
