import { CrewType } from "../@types/pageDataTypes";
import Carousel from "../components/Carousel";

const Crew = ({ data }: { data: CrewType[] }) => {
  return (
    <>
      <h5 className="page-title crew">
        <strong>02</strong>Meet your crew
      </h5>
      <div className="container align-page-crew">
        {/* <div className="col">
          <div className="carousel-content">
            <h4 className="carousel-subtitle">Commander</h4>
            <h3 className="carousel-title">Douglas Hurley</h3>
            <p className="description carousel-description">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
          <div className="dots">
            {Array.from({ length: 4 }, (_, i) => (
              <Button key={i} type="dot" active={i === 0}></Button>
            ))}
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
        </div> */}
        <Carousel variant={1} data={data} />
      </div>
    </>
  );
};

export default Crew;
