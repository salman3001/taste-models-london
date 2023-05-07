import { Routes, Route } from "react-router-dom";
import Layout from "./assets/components/Layout";
import Home from "./assets/pages/Home";
import { NotFound } from "./assets/pages/NotFound";
import Aboutus from "./assets/pages/Aboutus";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;
