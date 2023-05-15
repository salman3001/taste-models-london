import brandlogo from "../images/Brand-logo.svg";
import { BsArrowRightShort } from "react-icons/bs";
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/store";
import { togelModalState } from "../../Redux/modalSlice";
import Avatar from "./Avatar";

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

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
        <div className="flex items-center gap-10 xl:gap-14  ">
          <a
            href=""
            className={`${
              pathname === "/models" && "text-primary "
            } hidden lg:inline`}
            onClick={(e) => {
              e.preventDefault();
              navigate("/models");
            }}
          >
            Models
          </a>
          <a
            href=""
            className={`${
              pathname === "/aboutus" && "text-primary "
            } hidden lg:inline`}
            onClick={(e) => {
              e.preventDefault();
              navigate("/aboutus");
            }}
          >
            About us
          </a>
          <a
            href=""
            className={`${
              pathname === "/blogs" && "text-primary "
            } hidden lg:inline`}
            onClick={(e) => {
              e.preventDefault();
              navigate("/blogs");
            }}
          >
            Blogs
          </a>
          <a
            href=""
            className={`${
              pathname === "/faq" && "text-primary "
            } hidden lg:inline`}
            onClick={(e) => {
              e.preventDefault();
              navigate("/faq");
            }}
          >
            Faq
          </a>
          <a
            href=""
            className={`${
              pathname === "/joinus" && "text-primary "
            } hidden lg:inline`}
            onClick={(e) => {
              e.preventDefault();
              navigate("/joinus");
            }}
          >
            Join us
          </a>
          <a
            href=""
            className={`${
              pathname === "/members" && "text-primary "
            } hidden lg:inline`}
            onClick={(e) => {
              e.preventDefault();
              dispatch(togelModalState("LoginForm"));
            }}
          >
            Members
          </a>

          <div className="flex gap-0 sm:gap-10">
            {/* avatar */}
            {user.url !== "" && <Avatar />}

            <button
              className="btn btn-primary hidden lg:flex"
              onClick={() => {
                dispatch(togelModalState("bookModelForm"));
              }}
            >
              Book Model <BsArrowRightShort size={"1.75rem"} />
            </button>
          </div>
          <div className="lg:hidden hover:text-primary ">
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
        </div>
      </nav>
      {/* dropbar */}
      <nav
        className={`${
          menuState ? "h-max p-10 border-b" : "h-0"
        } fixed bg-base2 text-white flex flex-col justify-between items-start lg:hidden overflow-hidden transition-all duration-500 ease-out z-20 w-full mt-[10vh] -top-1 bg-opacity-95`}
      >
        <div className="flex flex-col lg:hidden items-start gap-5 lg:gap-12">
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate("/models");
              setMenuState(false);
            }}
          >
            Models
          </a>

          <a
            onClick={(e) => {
              e.preventDefault();
              navigate("/aboutus");
              setMenuState(false);
            }}
          >
            About us
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate("/blogs");
              setMenuState(false);
            }}
          >
            Blogs
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate("/faq");
              setMenuState(false);
            }}
          >
            Faq
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate("/joinus");
              setMenuState(false);
            }}
          >
            Join us
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              dispatch(togelModalState("LoginForm"));
              setMenuState(false);
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
              dispatch(togelModalState("bookModelForm"));
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
