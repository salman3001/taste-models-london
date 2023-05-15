import { ChangeEvent, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const ImageUploader = () => {
  const [fileList, setFileList] = useState<File[]>();
  const [error, setError] = useState<{ error: boolean; message: string }>({
    error: false,
    message: "",
  });
  const maxLength = 5;

  const validateFileType = (files: FileList) => {
    let valid = true;
    for (let i = 0; i < files.length; i++) {
      const element = files[i];
      if (!["image/png", "image/jpg", "image/jpeg"].includes(element.type)) {
        valid = false;
      }
    }
    return valid;
  };

  const validateMaxLength = (files: FileList) => {
    if (files.length > maxLength) {
      return false;
    } else {
      return true;
    }
  };

  const GetFileList = (files: FileList | null) => {
    if (files !== null) {
      const array = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        array.push(file);
      }
      return array;
    }
  };

  //   const GetFileUrlAndName = (files: FileList) => {
  //     const array = [];
  //     for (let i = 0; i < files.length; i++) {
  //       const fileObject = files[i];
  //       array.push({
  //         url: URL.createObjectURL(fileObject),
  //         fileName: fileObject.name,
  //       });
  //     }
  //     return array;
  //   };

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError({
      error: false,
      message: "",
    });

    setFileList([]);

    if (e.target.files !== null) {
      if (validateFileType(e.target.files)) {
        if (validateMaxLength(e.target.files)) {
          setFileList(GetFileList(e.target.files));
        } else {
          setError({
            error: true,
            message: `Maximum ${maxLength} images are accepted`,
          });
        }
      } else {
        setError({
          error: true,
          message: "Only png,jpg, jpeg format accepted!",
        });
      }
    }
  };

  const deleteFile = (name: string) => {
    const newFileList = fileList?.filter((value) => value.name !== name);
    setFileList(newFileList);
  };

  return (
    <div className="space-y-6">
      <div>
        {error.error && <p className="text-red-500">{error.message}</p>}
        <div className="flex justify-center sm:justify-start gap-6 flex-wrap">
          {fileList?.map((file) => (
            <UploadCard
              url={URL.createObjectURL(file)}
              name={file.name}
              deleteFile={deleteFile}
            />
          ))}
        </div>
      </div>
      <div className="padding-1 padding-2 border-2 border-[#21272D] border-dashed">
        <div className="max-w-xl mx-auto space-y-4">
          <p className="text-xl text-[#7E8283] text-center">
            Drop Your images here
          </p>
          <p className="text-xl text-[#7E8283] text-center">Or</p>
          <div className="">
            <label htmlFor="images" className="btn btn-primary">
              Browse for your picture
            </label>
            <input
              name="images"
              id="images"
              type="file"
              accept="image/jpeg,image/png,image/jpg"
              multiple
              className="hidden"
              onChange={handelChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;

const UploadCard = (prop: {
  url: string;
  name: string;
  deleteFile: (name: string) => void;
}) => {
  return (
    <div className="relative flex max-w-[11rem]">
      <div className="flex">
        <img src={prop.url} alt="" className="w-full" />
      </div>
      {/* backdrop */}
      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent opacity-90"></div>
      <p className="absolute bottom-0 p-2 text-xs">{prop.name}</p>
      <button
        onClick={() => {
          prop.deleteFile(prop.name);
        }}
        className="absolute p-0.5 bg-white rounded-full right-2 top-2"
      >
        <RxCross2 color="black" />
      </button>
    </div>
  );
};
