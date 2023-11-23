import { CrewType } from "../@types/pageDataTypes";
import Carousel from "../components/Carousel";

const Crew = ({ data }: { data: CrewType[] }) => {
  return (
    <>
      <h5 className="page-title crew">
        <strong>02</strong>Meet your crew
      </h5>
      <div className="container align-page-crew">
        <Carousel variant={1} data={data} />
      </div>
    </>
  );
};

export default Crew;
