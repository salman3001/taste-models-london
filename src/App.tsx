import { Routes, Route } from "react-router-dom";
import Layout from "./assets/components/Layout";
import Home from "./assets/pages/Home";
import { NotFound } from "./assets/pages/NotFound";
import Aboutus from "./assets/pages/Aboutus";
import Faq from "./assets/pages/Faq";
import Models from "./assets/pages/Models";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/models" element={<Models />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;
