import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useScrollPercentage from "react-scroll-percentage-hook";

const Layout = () => {
  // const { ref, percentage } = useScrollPercentage();
  return (
    <div
      // ref={ref}
      className="flex relative flex-col min-h-screen justify-between text-white"
    >
      <Navbar />
      <div className="grow bg-base2 text-white">
        <Outlet />
      </div>
      <Footer />
      {/* <div className="fixed bottom-0 right-0">
        <CircularProgressbar
          value={percentage.vertical}
          text={`${percentage.vertical}%`}
        />
      </div> */}
    </div>
  );
};

export default Layout;
