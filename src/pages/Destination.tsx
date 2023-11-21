import Button from "../components/Button";
import { destinations as data } from "../data.json";

const Destination = () => {
  return (
    <>
      <h5 className="page-title">
        <strong>01</strong>Pick your destination
      </h5>
      <div className="container align-page-destination">
        <div className="col">
          <div className="tab-image-wrapper">
            <img
              className="tab-image"
              src="../src/assets/destination/image-moon.webp"
              alt="image-moon"
            />
          </div>
        </div>
        <div className="col">
          <div className="tabs">
            {data.map((value, i) => (
              <Button key={i + 1} type="tab" active={i === 0}>
                {value.name}
              </Button>
            ))}
          </div>
          <div className="tab-content">
            <h2 className="tab-title">Moon</h2>
            <p className="description tab-description">
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
            <div className="tab-stats">
              <div className="stat-group">
                <p className="sub-heading-2">Avg. distance</p>
                <p className="sub-heading-1">384,400 km</p>
              </div>
              <div className="stat-group">
                <p className="sub-heading-2">Est. travel time</p>
                <p className="sub-heading-1">3 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
