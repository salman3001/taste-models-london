import brandlogo from "../images/Brand-logo.svg";
import { BsArrowRightShort } from "react-icons/bs";
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <>
      <nav className="h-[8vh] bg-base1 text-white flex justify-between items-center px-2 md:px-6 lg:px-12">
        <div>
          <img src={brandlogo} alt="" className="h-6" />
        </div>
        <div className="hidden md:flex items-center gap-5 lg:gap-12">
          <a href="" className="[&[href='/models']]:text-primary">
            Models
          </a>
          <a href="" className="[&[href='/members']]:text-primary">
            Members
          </a>
          <a href="" className="[&[href='/aboutus']]:text-primary">
            About us
          </a>
          <a href="" className="[&[href='/blogs']]:text-primary">
            Blogs
          </a>
          <a href="" className="[&[href='/faq']]:text-primary">
            Faq
          </a>
          <a href="" className="[&[href='/contactus']]:text-primary">
            Contact us
          </a>
          <button className="btn btn-primary">
            Book Model <BsArrowRightShort size={"1.25rem"} />
          </button>
        </div>
        <div className="md:hidden">
          {!menuState ? (
            <CgMenuRightAlt
              onClick={() => {
                setMenuState((state) => !state);
              }}
              size={"1.75rem"}
              className="menuAnimation"
            />
          ) : (
            <RxCross1
              size={"1.5rem"}
              onClick={() => {
                setMenuState((state) => !state);
              }}
              className="menuAnimation"
            />
          )}
        </div>
      </nav>
      {/* dropbar */}
      <nav
        className={`${
          menuState ? "h-80 p-6" : "h-0"
        } bg-base2 text-white flex flex-col justify-between items-center  overflow-hidden transition-all duration-500 ease-out`}
      >
        <div className="flex flex-col md:hidden items-start gap-5 lg:gap-12">
          <a
            href=""
            className="[&[href='/models']]:text-primary"
            onClick={(e) => {
              e.preventDefault();
              setMenuState(false);
            }}
          >
            Models
          </a>
          <a
            href=""
            className="[&[href='/members']]:text-primary"
            onClick={(e) => {
              e.preventDefault();
              setMenuState(false);
            }}
          >
            Members
          </a>
          <a
            href=""
            className="[&[href='/aboutus']]:text-primary"
            onClick={(e) => {
              e.preventDefault();
              setMenuState(false);
            }}
          >
            About us
          </a>
          <a
            href=""
            className="[&[href='/blogs']]:text-primary"
            onClick={(e) => {
              e.preventDefault();
              setMenuState(false);
            }}
          >
            Blogs
          </a>
          <a
            href=""
            className="[&[href='/faq']]:text-primary"
            onClick={(e) => {
              e.preventDefault();
              setMenuState(false);
            }}
          >
            Faq
          </a>
          <a
            href=""
            className="[&[href='/contactus']]:text-primary"
            onClick={(e) => {
              e.preventDefault();
              setMenuState(false);
            }}
          >
            Contact us
          </a>
          <button
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              setMenuState(false);
            }}
          >
            Book Model <BsArrowRightShort size={"1.25rem"} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
