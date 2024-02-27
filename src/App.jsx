import "./Components/css/index.css";
import Hero from "./Components/js/Hero";
import Cards from "./Components/js/Cards";
import Information from "./Components/js/Information";
import CTA from "./Components/js/CTA";
import Footer from "./Components/js/Footer";

function App() {
  return (
    <>
      <div className="app">
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
