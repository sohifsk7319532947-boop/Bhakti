import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import Rashifal from "./pages/Rashifal";
import Wallpapers from "./pages/Wallpapers";
import Bhajans from "./pages/Bhajans";
import Countdown from "./pages/Countdown";

export default function App() {
  return (
    <Router>
      <SplashScreen />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rashifal" element={<Rashifal />} />
          <Route path="/wallpapers" element={<Wallpapers />} />
          <Route path="/bhajans" element={<Bhajans />} />
          <Route path="/countdown" element={<Countdown />} />
        </Routes>
      </Layout>
    </Router>
  );
}
