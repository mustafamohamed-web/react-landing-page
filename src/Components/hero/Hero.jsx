import Navigation from "../navigation/Navigation";
function Hero() {
  return (
    <>
      <div className="main">
        <Navigation />
        <div className="hero-container">
          <div className="hero-information">
            <h1 className="hero-title">This Website is awesome</h1>
            <p className="hero-description">
              This wesbite has some subtext that goes here under the main title.
              Its a smaller font and the colour has a lower contrast
            </p>
            <button className="hero-btn">Sign up</button>
          </div>
          <div className="hero-img">
            <img src="/public/assets/hero-img.jpg" alt="hero image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
