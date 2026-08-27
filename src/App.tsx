import { Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import ScrollToTop from "./layout/ScrollToTop";
import Home from "./pages/Home";
import Work from "./pages/Work";
import SideProjects from "./pages/SideProjects";

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/side-projects" element={<SideProjects />} />
      </Routes>
    </Layout>
  );
}
