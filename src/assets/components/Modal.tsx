import { RxCross2 } from "react-icons/rx";
import BookModelForm from "./BookModelForm";
import { IContent } from "./Types";
import LoginForm from "./LoginForm";

const Modal = (prop: {
  state: boolean;
  togelHandler: (content: IContent) => void;
  content: IContent;
}) => {
  return (
    <>
      {prop.state && (
        <div
          className="fixed  flex top-0 left-0 w-screen h-screen bg-black bg-opacity-80 z-[500] justify-center items-center padding-1 padding-2 text-[#7E8283]  "
          onClick={() => {
            prop.togelHandler("bookModelForm");
          }}
        >
          <div
            className="relative bg-base2  flex flex-col justify-center h-min overflow-y-scroll  w-full max-w-6xl"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {/* content */}
            {prop.content === "bookModelForm" ? (
              <BookModelForm togelHandler={prop.togelHandler} />
            ) : (
              prop.content === "LoginForm" && (
                <LoginForm togelModal={prop.togelHandler} />
              )
            )}

            {/* close button */}
            <div
              className="absolute top-3 right-3 cursor-pointer z-10"
              onClick={() => {
                prop.togelHandler("bookModelForm");
              }}
            >
              <RxCross2 color="white" size={25} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
