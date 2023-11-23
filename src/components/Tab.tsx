import { useState } from "react";
import "../styles/tab.css";
import Button from "../components/Button";
import { DestinationType } from "../@types/pageDataTypes";

const Tab = ({ data }: { data: DestinationType[] }) => {
  const [selectedDestination, setSelectedDestination] =
    useState<DestinationType>(data[0]);

  const handleTabClick = (name: string) => {
    const result = data.find((value) => value.name === name);
    setSelectedDestination(result || data[0]);
  };

  return (
    <>
      <div className="col">
        <div className="tab-image-wrapper">
          <img
            className="tab-image"
            src={selectedDestination.images.webp}
            alt={`${selectedDestination.name} image`}
          />
        </div>
      </div>
      <div className="col">
        <div className="tabs">
          {data.map((value, i) => (
            <Button
              key={i + 1}
              type="tab"
              active={selectedDestination.name === value.name}
              onClick={() => handleTabClick(value.name)}
            >
              {value.name}
            </Button>
          ))}
        </div>
        <div className="tab-content">
          <h2 className="tab-title">{selectedDestination.name}</h2>
          <p className="description tab-description">
            {selectedDestination.description}
          </p>
          <div className="tab-stats">
            <div className="stat-group">
              <p className="sub-heading-2">Avg. distance</p>
              <p className="sub-heading-1">{selectedDestination.distance}</p>
            </div>
            <div className="stat-group">
              <p className="sub-heading-2">Est. travel time</p>
              <p className="sub-heading-1">{selectedDestination.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab;
