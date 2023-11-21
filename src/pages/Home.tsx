import Button from "../components/Button";

const Home = () => {
  return (
    <div className="container align-home">
      <div className="col col-flex">
        <h5 className="mb-24">So, you want to travel to</h5>
        <h1 className="mb-24">Space</h1>
        <p className="description">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="col">
        <div className="btn-wrapper">
          <Button type="main">Explore</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
