const Crew = () => {
  return (
    <>
      <h5 className="page-title">
        <strong>02</strong>Meet your crew
      </h5>
      <div className="container align-page-crew">
        <div className="col">
          <div className="carousel-content content-home">
            <h4 className="carousel-subtitle">Commander</h4>
            <h3 className="carousel-title">Douglas Hurley</h3>
            <p className="carousel-description">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
          <div className="dots">
            <button className="btn btn-dot active"></button>
            <button className="btn btn-dot"></button>
            <button className="btn btn-dot"></button>
            <button className="btn btn-dot"></button>
          </div>
        </div>
        <div className="col">
          <div className="carousel-image-wrapper">
            <img
              className="carousel-image"
              src="../src/assets/crew/image-douglas-hurley.webp"
              alt="image-moon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Crew;
