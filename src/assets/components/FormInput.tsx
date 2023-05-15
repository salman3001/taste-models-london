const FormInput = (prop: {
  name: string;
  label: string;
  value: string | number;
  type: "text" | "number" | "password";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: any;
  error?: boolean;
}) => {
  return (
    <div className="flex flex-col relative w-full border-b-[1px] border-[#21272D]">
      <input
        placeholder={prop.label}
        type={prop.type}
        name={prop.name}
        value={prop.value}
        onChange={prop.onChange}
        id={prop.name}
        className={`bg-transparent  focus:ring-transparent block w-full p-2 ${
          prop.error ? "border-red-500" : "border-none"
        }`}
      />
    </div>
  );
};

export default FormInput;
