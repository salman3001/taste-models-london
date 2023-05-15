import { BsArrowRightShort } from "react-icons/bs";
import loginphoto from "../images/login-form-img.png";
import FormInput from "./FormInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import dp from "../images/temp-profile-pic.jpeg";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/userSlice";
import { togelModalState } from "../../Redux/modalSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: () => {
      console.log("yes");

      dispatch(setUser({ name: "eric", url: dp }));
    },
  });

  return (
    <div className="flex flex-col-reverse lg:flex-row">
      <div className="hidden lg:block lg:w-[46%]">
        <div
          className="flex h-full w-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${loginphoto})`,
          }}
        ></div>
      </div>
      <div className="w-full lg:w-[54%] px-4 sm:px-8 md:px-16 py-16 flex flex-col items-center gap-8">
        <h1 className="text-4xl text-white">Members</h1>
        <p className="max-w-sm text-center text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <FormInput
          label="Name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          type="text"
          error={formik.touched.name && Boolean(formik.errors.name)}
        />
        <FormInput
          label="Password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          type="password"
          error={formik.touched.password && Boolean(formik.errors.password)}
        />
        <div className="w-full mt-5">
          <button
            type="submit"
            className="btn  btn-primary w-full  self-end transition-opacity duration-1000 text-white text-xl"
            onClick={(e) => {
              e.preventDefault();
              formik.handleSubmit();
              dispatch(togelModalState("bookModelForm"));
            }}
          >
            Login
            <BsArrowRightShort size={"1.75rem"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
