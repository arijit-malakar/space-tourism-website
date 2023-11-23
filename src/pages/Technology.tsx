import { TechnologyType } from "../@types/pageDataTypes";
import Carousel from "../components/Carousel";

const Technology = ({ data }: { data: TechnologyType[] }) => {
  return (
    <>
      <h5 className="page-title technology">
        <strong>03</strong>Space launch 101
      </h5>
      <div className="container align-page-technology">
        <Carousel variant={2} data={data} />
      </div>
    </>
  );
};

export default Technology;
