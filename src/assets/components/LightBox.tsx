interface Iprop {
  url: string;
  open: boolean;
  togelFunction: (url: string) => void;
}

const LightBox = (prop: Iprop) => {
  return (
    <>
      {prop.open && (
        <div
          className=" flex justify-center items-center fixed left-0 top-0 w-full h-full bg-black bg-opacity-90 p-8 text-white z-[100] animate-[fadeIn] duration-300"
          onClick={() => prop.togelFunction("")}
        >
          <img src={prop.url} alt="" />
        </div>
      )}
    </>
  );
};

export default LightBox;
