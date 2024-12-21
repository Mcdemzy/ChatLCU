import { BrowserRouter as Router, Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/auth/SignupPage";
import LoginPage from "./pages/auth/LoginPage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Home from "./pages/Home";
import HomeDemo from "./pages/HomeDemo";
import HomeNavbar from "./components/shared/HomeNavbar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home/chat" element={<Home />} />
          <Route path="/nav" element={<HomeNavbar />} />
          <Route path="/demo/chat" element={<HomeDemo />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup/password" element={<Signup />} />
          <Route path="/login/password" element={<Login />} />
          <Route path="/reset-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
