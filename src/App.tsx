import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="col">
            <div className="content-home">
              <h5 className="mb-24">So, you want to travel to</h5>
              <h1 className="mb-24">Space</h1>
              <p>
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
          </div>
          <div className="col">
            <div className="btn-wrapper">
              <button className="btn btn-main">Explore</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
