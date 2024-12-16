import { BrowserRouter as Router, Route, Routes } from "react-router";
import Interface from "./pages/Interface";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/interface" element={<Interface />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
