import { BsArrowRight, BsPlus } from "react-icons/bs";
import FormInput from "../components/FormInput";
import ImageUploader from "../components/ImageUploader";
import { useState } from "react";

const Joinus = () => {
  const [aditionalForm, setAditionalForm] = useState(false);

  const togelAditionalForm = () => {
    setAditionalForm((state) => !state);
  };
  return (
    <div className="padding-1 padding-2 space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-extralight">New Models Applications </h1>
        <p className="uppercase text-primary">Lorem Ipsum</p>
      </div>
      <h3 className="text-xl">Your Details</h3>
      <div className="grid grid-cols-2 gap-8">
        <FormInput label="Name" />
        <FormInput label="Phone" />
        <FormInput label="Email" />
        <FormInput label="Age" />
        <FormInput label="Email" />
        <FormInput label="Age" />
        <FormInput label="Email" />
        <FormInput label="Age" />
      </div>
      <div>
        <h3 className="text-xl">Attach Picture</h3>
        <p className="text-[#7E8283]">
          Lorem Ipsum is simply dummy text of the
        </p>
      </div>
      <ImageUploader />
      <div className="space-y-2">
        <h3 className="text-xl">Profile Details</h3>
        <button
          className="text-primary flex items-center"
          onClick={togelAditionalForm}
        >
          <BsPlus size={20} /> Aditional Detail
        </button>
      </div>
      {aditionalForm && (
        <div className="grid grid-cols-2 gap-8">
          <FormInput label="Name" />
          <FormInput label="Phone" />
          <FormInput label="Email" />
          <FormInput label="Age" />
          <FormInput label="Email" />
          <FormInput label="Age" />
          <FormInput label="Email" />
          <FormInput label="Age" />
        </div>
      )}
      <div className="w-full pt-6">
        <button className="btn btn-primary w-full max-w-xl text-xl  mx-auto">
          Send
          <BsArrowRight />
        </button>
      </div>
      <div className="space-y-6">
        <div className="space-y-4 pt-10">
          <h3 className="text-xl">Model Casting</h3>
          <p className="text-[#7E8283]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-base">Model Casting</h3>
          <p className="text-[#7E8283]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-base">Model Casting</h3>
          <p className="text-[#7E8283]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-base">What are you looking for</h3>
          <div className="space-y-6">
            <li>Do You Rent To International Visitors?</li>
            <li>Do You Rent To International Visitors?</li>
            <li>Do You Rent To International Visitors?</li>
            <li>Do You Rent To International Visitors?</li>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base">Model Casting</h3>
          <p className="text-[#7E8283]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
          <p className="text-[#7E8283]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
