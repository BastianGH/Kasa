import Banner from "../../components/Banner";
import Card from "../../components/Card";
import locations from "../../logements.json"
import homeBanner from "../../assets/imgs/home.jpeg";

function Home() {
  return (
    <div>
        <Banner Img={homeBanner} Title="" />
        <div class="locations-container" >
            {locations.map((location) => (
              <Card Location={location}/>
            ))}
        </div>        
    </div>
  );
}

export default Home;
