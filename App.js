import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import VehicleRecommendation from "./components/home";
import Footer from "./components/footer";
import WelcomePage from "./components/welcome";
import Aboutus from "./components/aboutUs";
import VehicleDetails from "./components/VehicleDetails";
import React, { useEffect, useState } from "react";
import doodle from "./components/assets/doodle.jpg";
import doodleDark from "./components/assets/doodle-dark.jpg";


function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

useEffect(() => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("theme", theme);
}, [theme]);

  return (
          <Router>
            <div
              className="flex flex-col min-h-screen bg-cover bg-center transition-all duration-500"
              style={{
                backgroundImage: `url(${theme === "dark" ? doodleDark : doodle})`,
                backgroundAttachment: "fixed",
              }}
            >
        <Navbar theme={theme} setTheme={setTheme} />

        <main className="flex-grow bg-white bg-opacity-70 p-8 mt-4 rounded-lg min-h-[70vh]">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/select-car" element={<VehicleRecommendation />} />
            <Route path="/vehicle/:vehicleId" element={<VehicleDetails />} />
            <Route path="/about" element={<Aboutus />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;