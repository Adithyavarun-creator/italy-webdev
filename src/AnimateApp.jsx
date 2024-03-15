import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";
import SingleUserPage from "./pages/SingleUserPage/SingleUserPage";
import Navbar from "./components/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";

const AnimateApp = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/user/:id" element={<SingleUserPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimateApp;
