import { RxCross2 } from "react-icons/rx";
import BookModelForm from "./BookModelForm";
import LoginForm from "./LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { togelModalState } from "../../Redux/modalSlice";

const Modal = () => {
  const modal = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  return (
    <>
      {modal.state && (
        <div
          className="fixed  flex top-0 left-0 w-screen h-screen bg-black bg-opacity-80 z-[500] justify-center items-center padding-1 padding-2 text-[#7E8283]  "
          onClick={() => {
            dispatch(togelModalState("bookModelForm"));
          }}
        >
          <div
            className="relative bg-base2  flex flex-col justify-center h-min overflow-y-scroll  w-full max-w-6xl"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {/* content */}
            {modal.content === "bookModelForm" ? (
              <BookModelForm />
            ) : (
              modal.content === "LoginForm" && <LoginForm />
            )}

            {/* close button */}
            <div
              className="absolute top-3 right-3 cursor-pointer z-10"
              onClick={() => {
                dispatch(togelModalState("bookModelForm"));
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
