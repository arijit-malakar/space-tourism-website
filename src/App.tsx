import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import data from "./data.json";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route
            path="destination"
            element={<Destination data={data.destinations} />}
          />
          <Route path="crew" element={<Crew data={data.crew} />} />
          <Route
            path="technology"
            element={<Technology data={data.technology} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
