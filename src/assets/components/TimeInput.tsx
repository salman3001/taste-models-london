const TimeInput = (prop: {
  name: string;
  label: string;
  value: string;
  onChange: () => void;
}) => {
  return (
    <div className="flex flex-col relative w-full border-b-[1px] border-[#21272D] text-white">
      <input
        placeholder={prop.label}
        type="time"
        name={prop.name}
        value={prop.value}
        onChange={prop.onChange}
        id={prop.name}
        className="bg-transparent border-none focus:ring-transparent block w-full p-2.5  "
      />
    </div>
  );
};

export default TimeInput;
