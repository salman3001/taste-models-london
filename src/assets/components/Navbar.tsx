import brandlogo from "../images/Brand-logo.svg";
import { BsArrowRightShort } from "react-icons/bs";
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <nav className="h-[10vh] bg-base1 text-white flex justify-between items-center px-4 md:px-6 lg:px-12 xl:px-16">
        <div>
          <img
            src={brandlogo}
            alt=""
            className="h-7"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="hidden md:flex items-center gap-7 lg:gap-16 ">
          <a
            href=""
            className="[&[href='/models']]:text-primary"
            onClick={(e) => {
              e.preventDefault();
              navigate("/models");
            }}
          >
            Models
          </a>
          <a
            href=""
            className="[&[href='/members']]:text-primary"
            onClick={(e) => {
              e.preventDefault();
              navigate("/members");
            }}
          >
            Members
          </a>
          <a
            href=""
            className="[&[href='/aboutus']]:text-primary"
            onClick={(e) => {
              e.preventDefault();
              navigate("/aboutus");
            }}
          >
            About us
          </a>
          <a
            href=""
            className="[&[href='/blogs']]:text-primary"
            onClick={(e) => {
              e.preventDefault();
              navigate("/blogs");
            }}
          >
            Blogs
          </a>
          <a
            href=""
            className="[&[href='/faq']]:text-primary"
            onClick={(e) => {
              e.preventDefault();
              navigate("/faq");
            }}
          >
            Faq
          </a>
          <a
            href=""
            className="[&[href='/contactus']]:text-primary"
            onClick={(e) => {
              e.preventDefault();
              navigate("/cotactus");
            }}
          >
            Contact us
          </a>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/models");
            }}
          >
            Book Model <BsArrowRightShort size={"1.75rem"} />
          </button>
        </div>
        <div className="md:hidden hover:text-primary ">
          {!menuState ? (
            <CgMenuRightAlt
              onClick={() => {
                setMenuState((state) => !state);
              }}
              size={"2.5rem"}
              className="menuAnimation"
            />
          ) : (
            <RxCross1
              size={"2rem"}
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
          menuState ? "h-[22rem] p-6" : "h-0"
        } bg-base2 text-white flex flex-col justify-between items-center md:hidden overflow-hidden transition-all duration-500 ease-out`}
      >
        <div className="flex flex-col md:hidden items-start gap-5 lg:gap-12">
          <a
            href=""
            className="[&[href='/models']]:text-primary"
            onClick={(e) => {
              e.preventDefault();
              navigate("/models");
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
              navigate("/members");
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
              navigate("/aboutus");
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
              navigate("/blogs");
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
              navigate("/faq");
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
              navigate("/contactus");
              setMenuState(false);
            }}
          >
            Contact us
          </a>
          <button
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              navigate("/models");
              setMenuState(false);
            }}
          >
            Book Model <BsArrowRightShort size={"1.75rem"} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
