function Cards() {
  return (
    <>
      <div className="cards-container">
        <h2 className="cards-subtitle">Some Random Information</h2>
        <div className="cards">
          <div className="card">
            <img
              src="/public/assets/card-img.jpg"
              className="card-img"
              alt=""
            />
            <p>This is a subtext under an illustration or image</p>
          </div>
          <div className="card">
            <img
              src="/public/assets/card-img.jpg"
              className="card-img"
              alt=""
            />
            <p>This is a subtext under an illustration or image</p>
          </div>
          <div className="card">
            <img
              src="/public/assets/card-img.jpg"
              className="card-img"
              alt=""
            />
            <p>This is a subtext under an illustration or image</p>
          </div>
          <div className="card">
            <img
              src="/public/assets/card-img.jpg"
              className="card-img"
              alt=""
            />
            <p>This is a subtext under an illustration or image</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
