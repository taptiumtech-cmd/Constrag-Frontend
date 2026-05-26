import { Routes, Route } from "react-router-dom";

import LandingPage from "./features/landing/pages/LandingPage";
import Login from "./features/auth/pages/Login";
import Signup from "./features/auth/pages/Signup";
import ForgotPassword from "./features/auth/pages/ForgotPassword";
import EmailSent from "./features/auth/pages/EmailSent";
import OTPVerification from "./features/auth/pages/OtpVerification";
import HomeDashboard from "./features/dashboard/pages/HomeDashboard";
import ArchtivityHome from "./features/architivity/pages/ArchitivityHome";
import ToolkitHome from "./features/toolkit/pages/ToolkitHome";
import SiteAnalysis from "./features/toolkit/pages/SiteAnalysis";
import FeasibilityDashboard from "./features/toolkit/pages/FeasibilityDashboard";
import AICritique from "./features/toolkit/pages/AICritique";
import Renders from "./features/toolkit/pages/Renders";
import Research from "./features/toolkit/pages/Research";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/email-sent" element={<EmailSent />} />
      <Route path="/otp-verification" element={<OTPVerification />} />
      <Route path="/dashboard" element={<HomeDashboard />} />
      <Route path="/archtivity" element={<ArchtivityHome />} />
      <Route path="/toolkit" element={<ToolkitHome />} />
      <Route path="/site-analysis" element={<SiteAnalysis />} />
      <Route path="/feasibility" element={<FeasibilityDashboard />} />
      <Route path="/ai-critique" element={<AICritique />} />
      <Route path="/renders" element={<Renders />} />
      <Route path="/research" element={<Research />} />
    </Routes>
  );
}

export default App;
