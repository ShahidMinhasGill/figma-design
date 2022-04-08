import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/navabar/navabar";
import Home from "./Components/home-page/home";
import Gallery from "./Components/gallery/gallery";
import BuyNow from "./Components/buy-now/buyNow";
import RoadMap from "./Components/our-road-map/roadMap";
import Team from "./Components/the-team/team";
import Footer from "./Components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Gallery />
      <BuyNow />
      <RoadMap />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
