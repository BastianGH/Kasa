import Banner from "../../components/Banner";
import Card from "../../components/Card";
import locations from "../../logements.json"

function Home() {
  return (
    <div>
        <Banner />
        <div class="locations-container" >
            {locations.map((location) => (
              <Card />
            ))}
        </div>        
    </div>
  );
}

export default Home;
