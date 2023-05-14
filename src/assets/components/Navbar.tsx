import brandlogo from "../images/Brand-logo.svg";
import { BsArrowRightShort } from "react-icons/bs";
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = (prop: { modalTogel: () => void }) => {
  const [menuState, setMenuState] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <nav className="fixed h-[10vh] bg-base1 text-white flex justify-between items-center px-4 md:px-6 lg:px-12 xl:px-16 z-30 w-full -top-1">
        <div>
          <img
            src={brandlogo}
            alt=""
            className="h-10 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="hidden md:flex items-center gap-10 lg:gap-16 ">
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
            className="[&[href='/members']]:text-primary"
            onClick={(e) => {
              e.preventDefault();
              navigate("/members");
            }}
          >
            Members
          </a>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/models");
              prop.modalTogel();
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
          menuState ? "h-max p-10 border-b" : "h-0"
        } fixed bg-base2 text-white flex flex-col justify-between items-start md:hidden overflow-hidden transition-all duration-500 ease-out z-30 w-full mt-[10vh] -top-1 bg-opacity-95`}
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
            className=""
            onClick={(e) => {
              e.preventDefault();
              navigate("/members");
            }}
          >
            Members
          </a>
          <button
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              navigate("/models");
              setMenuState(false);
              prop.modalTogel();
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
