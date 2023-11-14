const App = () => {
  return (
    <>
      <header className="header">
        <img src="../src/assets/shared/logo.svg" alt="logo-img" />
        <div className="header-divider"></div>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a className="nav-text active" href="#">
                <strong>00</strong> Home
              </a>
            </li>
            <li>
              <a className="nav-text" href="#">
                01 Destination
              </a>
            </li>
            <li>
              <a className="nav-text" href="#">
                02 Crew
              </a>
            </li>
            <li>
              <a className="nav-text" href="#">
                03 Technology
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="container">
          <div className="col">
            <h5 className="mb-24">So, you want to travel to</h5>
            <h1 className="mb-24">Earth</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
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
