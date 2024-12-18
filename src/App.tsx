import { BrowserRouter as Router, Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/auth/SignupPage";
import LoginPage from "./pages/auth/LoginPage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";

function App() {
  return (
    <>
      <Router>
        <Routes>
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
