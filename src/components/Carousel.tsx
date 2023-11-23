import { useState } from "react";
import "../styles/carousel.css";
import { CrewType, TechnologyType } from "../@types/pageDataTypes";
import Button from "../components/Button";

interface CarouselProps {
  variant: 1 | 2;
  data: CrewType[] | TechnologyType[];
}

const Carousel: React.FC<CarouselProps> = ({ variant, data }) => {
  const [selectedData, setSelectedData] = useState<CrewType | TechnologyType>(
    data[0]
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setSelectedData(data[index]);
    setActiveIndex(index);
  };

  return (
    <>
      {variant === 1 && (
        <>
          <div className="col">
            <div className="carousel-content">
              <h4 className="carousel-subtitle">
                {(selectedData as CrewType).role}
              </h4>
              <h3 className="carousel-title">
                {(selectedData as CrewType).name}
              </h3>
              <p className="description carousel-description">
                {(selectedData as CrewType).bio}
              </p>
            </div>
            <div className="dots">
              {Array.from({ length: data.length }, (_, i) => (
                <Button
                  key={i}
                  type="dot"
                  active={i === activeIndex}
                  onClick={() => handleClick(i)}
                ></Button>
              ))}
            </div>
          </div>
          <div className="col">
            <div className="carousel-image-wrapper">
              <img
                className="carousel-image"
                src={(selectedData as CrewType).images.webp}
                alt={`${(selectedData as CrewType).name} image`}
              />
            </div>
          </div>
        </>
      )}

      {variant === 2 && (
        <>
          <div className="col">
            <div className="carousel2-content-wrapper">
              <div className="btn-wrapper-carousel2">
                {Array.from({ length: data.length }, (_, i) => (
                  <Button
                    key={i + 1}
                    type="carousel2"
                    active={i === activeIndex}
                    onClick={() => handleClick(i)}
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>
              <div className="carousel2-content">
                <p className="nav-text carousel2-subtitle">
                  The terminology...
                </p>
                <h3 className="carousel2-title">
                  {(selectedData as TechnologyType).name}
                </h3>
                <p className="description">
                  {(selectedData as TechnologyType).description}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="carousel2-image-wrapper">
              <img
                className="carousel2-image-portrait"
                src={(selectedData as TechnologyType).images.portrait}
                alt={`${(selectedData as TechnologyType).name} image`}
              />
              <img
                className="carousel2-image-landscape"
                src={(selectedData as TechnologyType).images.landscape}
                alt={`${(selectedData as TechnologyType).name} image`}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Carousel;
