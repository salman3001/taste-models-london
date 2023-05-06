import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar />
      <div className="grow ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
