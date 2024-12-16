import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Interface from "./pages/Interface";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interface" element={<Interface />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
