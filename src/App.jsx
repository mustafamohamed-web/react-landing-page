import "./index.css";
import Navigation from "./Components/navigation/Navigation";
import Hero from "./Components/hero/Hero";
import Cards from "./Components/cards/Cards";
import Information from "./Components/information/Information";
import CTA from "./Components/Cta/CTA";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <>
      <div className="app">
        <Navigation />
        <Hero />
        <Cards />
        <Information />
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default App;
