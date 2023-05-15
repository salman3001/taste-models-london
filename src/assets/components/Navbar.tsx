import brandlogo from "../images/Brand-logo.svg";
import { BsArrowRightShort } from "react-icons/bs";
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IContent, IUser } from "./Types";
import { Avatar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/store";
import { removeUser } from "../../Redux/userSlice";

const Navbar = (prop: { modalTogel: (content: IContent) => void }) => {
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
        <div className="hidden lg:flex items-center gap-10 xl:gap-16 ">
          <a
            href=""
            className={`${pathname === "/models" && "text-primary"}`}
            onClick={(e) => {
              e.preventDefault();
              navigate("/models");
            }}
          >
            Models
          </a>
          <a
            href=""
            className={`${pathname === "/aboutus" && "text-primary"}`}
            onClick={(e) => {
              e.preventDefault();
              navigate("/aboutus");
            }}
          >
            About us
          </a>
          <a
            href=""
            className={`${pathname === "/blogs" && "text-primary"}`}
            onClick={(e) => {
              e.preventDefault();
              navigate("/blogs");
            }}
          >
            Blogs
          </a>
          <a
            href=""
            className={`${pathname === "/faq" && "text-primary"}`}
            onClick={(e) => {
              e.preventDefault();
              navigate("/faq");
            }}
          >
            Faq
          </a>
          <a
            href=""
            className={`${pathname === "/joinus" && "text-primary"}`}
            onClick={(e) => {
              e.preventDefault();
              navigate("/joinus");
            }}
          >
            Join us
          </a>
          <a
            href=""
            className={`${pathname === "/members" && "text-primary"}`}
            onClick={(e) => {
              e.preventDefault();
              prop.modalTogel("LoginForm");
            }}
          >
            Members
          </a>

          {/* avatar */}
          {user.url !== "" && (
            <Dropdown
              label={
                <Avatar alt="User settings" img={user.url} rounded={true} />
              }
              arrowIcon={false}
              inline={true}
              className="bg-gray-950 border-none text-white"
            >
              <Dropdown.Item
                className="text-white hover:bg-primary"
                onClick={() => {
                  dispatch(removeUser());
                }}
              >
                Sign out
              </Dropdown.Item>
            </Dropdown>
          )}

          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/models");
              prop.modalTogel("bookModelForm");
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
      </nav>
      {/* dropbar */}
      <nav
        className={`${
          menuState ? "h-max p-10 border-b" : "h-0"
        } fixed bg-base2 text-white flex flex-col justify-between items-start lg:hidden overflow-hidden transition-all duration-500 ease-out z-30 w-full mt-[10vh] -top-1 bg-opacity-95`}
      >
        <div className="flex flex-col lg:hidden items-start gap-5 lg:gap-12">
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
              navigate("/joinus");
              setMenuState(false);
            }}
          >
            Join us
          </a>
          <a
            href=""
            className=""
            onClick={(e) => {
              e.preventDefault();
              prop.modalTogel("LoginForm");
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
              prop.modalTogel("bookModelForm");
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
