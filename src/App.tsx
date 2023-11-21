import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Destination from "./pages/Destination";

const App = () => {
  return (
    <>
      <Header logoPath="../src/assets/shared/logo.svg">
        <Navbar />
      </Header>
      <main>
        <Destination />
      </main>
    </>
  );
};

export default App;
