import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between text-white">
      <Navbar />
      <div className="grow bg-base2">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
