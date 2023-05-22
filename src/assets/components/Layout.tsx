import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useScrollPercentage from "react-scroll-percentage-hook";
import { LegacyRef } from "react";

const Layout = () => {
  const { ref, percentage } = useScrollPercentage({ windowScroll: true });
  return (
    <div
      ref={ref as LegacyRef<HTMLDivElement>}
      className="flex relative flex-col min-h-screen justify-between text-white"
    >
      <Navbar />
      <div className="grow bg-base2 text-white">
        <Outlet />
      </div>
      <Footer />
      <div
        className={`fixed flex gap-2 hover:scale-125 justify-center items-center bottom-20 right-8 h-14 w-14 transition-all cursor-pointer duration-1000  ${
          percentage.vertical > 10 ? "opacity-100" : "opacity-0"
        } `}
        onClick={() => {
          window.scrollTo({ top: 0 });
        }}
      >
        <p className="text-primary uppercase text-lg">Top</p>
        <div className="relative">
          <CircularProgressbar value={percentage.vertical} />
          <div className="absolute w-1 h-1 rounded-full bg-primary top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
