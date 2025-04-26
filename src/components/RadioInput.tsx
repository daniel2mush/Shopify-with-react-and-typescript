interface RadioTypes {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioInput = ({ name, value, onChange, label }: RadioTypes) => {
  return (
    <section className=" w-full flex justify-between pr-10 text-gray-500 text-[12px] ">
      <label>{label}</label>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </section>
  );
};

export default RadioInput;
