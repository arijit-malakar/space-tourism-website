import { TechnologyType } from "../@types/pageDataTypes";
import Carousel from "../components/Carousel";

const Technology = ({ data }: { data: TechnologyType[] }) => {
  return (
    <>
      <h5 className="page-title technology">
        <strong>03</strong>Space launch 101
      </h5>
      <div className="container align-page-technology">
        {/* <div className="col">
          <div className="carousel2-content-wrapper">
            <div className="btn-wrapper-carousel2">
              {Array.from({ length: 3 }, (_, i) => (
                <Button key={i + 1} type="carousel2" active={i === 0}>
                  {i + 1}
                </Button>
              ))}
            </div>
            <div className="carousel2-content">
              <p className="carousel2-subtitle nav-text">The terminology...</p>
              <h3 className="carousel2-title">Spaceport</h3>
              <p className="description">
                A spaceport or cosmodrome is a site for launching (or receiving)
                spacecraft, by analogy to the seaport for ships or airport for
                aircraft. Based in the famous Cape Canaveral, our spaceport is
                ideally situated to take advantage of the Earth’s rotation for
                launch.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="carousel2-image-wrapper">
            <img
              className="carousel2-image-portrait"
              src="../src/assets/technology/image-spaceport-portrait.jpg"
              alt="image-moon"
            />
            <img
              className="carousel2-image-landscape"
              src="../src/assets/technology/image-spaceport-landscape.jpg"
              alt="image-moon"
            />
          </div>
        </div> */}
        <Carousel variant={2} data={data} />
      </div>
    </>
  );
};

export default Technology;
