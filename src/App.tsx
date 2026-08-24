import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Layout from "./layout/Layout";
import ScrollToTop from "./layout/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import SideProjects from "./pages/SideProjects";
import Contact from "./pages/Contact";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/side-projects" element={<SideProjects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
