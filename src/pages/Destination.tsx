import { DestinationType } from "../@types/pageDataTypes";
import Tab from "../components/Tab";

interface DestinationProps {
  data: DestinationType[];
}

const Destination: React.FC<DestinationProps> = ({ data }) => {
  return (
    <>
      <h5 className="page-title">
        <strong>01</strong>Pick your destination
      </h5>
      <div className="container align-page-destination">
        <Tab data={data} />
      </div>
    </>
  );
};

export default Destination;
