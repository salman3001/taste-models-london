import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { removeUser } from "../../Redux/userSlice";

const Avatar = () => {
  const [menu, setMenu] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const DropRef = useRef<HTMLDivElement>(null);
  const [focus, setFocus] = useState(true);

  useEffect(() => {
    DropRef.current?.focus();
  });

  return (
    <div className="relative">
      <div className="flex w-10 h-10 rounded-full overflow-hidden">
        <img
          src={user.url}
          alt=""
          className="w-full"
          onClick={() => {
            setMenu((state) => !state);
          }}
        />
      </div>
      {menu && (
        <div
          ref={DropRef}
          className="bg-black absolute -bottom-12 -left-12 z-30 py-2 w-max"
          tabIndex={0}
          onBlur={() => {
            if (focus) {
              setMenu((state) => !state);
            }
          }}
        >
          <button
            className="px-3 hover:bg-primary"
            onMouseEnter={() => {
              setFocus(false);
            }}
            onMouseLeave={() => {
              setFocus(true);
            }}
            onClick={() => {
              dispatch(removeUser());
              setMenu((state) => !state);
            }}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Avatar;
