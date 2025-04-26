import RadioInput from "../../../../components/RadioInput";
import { useDispatch } from "react-redux";
import { getRadioValue } from "../../../../Redux/home/HomeSlice";

export interface InputCagetoryType {
  name: string;
  value: string;
  label: string;
}

const Category = () => {
  const CategoryOptions: InputCagetoryType[] = [
    {
      name: "category",
      value: "",
      label: "All",
    },
    {
      name: "category",
      value: "sneakers",
      label: "Sneakers",
    },
    {
      name: "category",
      value: "flats",
      label: "Flats",
    },
    {
      name: "category",
      value: "sandals",
      label: "Sandals",
    },
    {
      name: "category",
      value: "heels",
      label: "Heels",
    },
  ];

  const dispatch = useDispatch();
  function handleOnClick(e: React.ChangeEvent<HTMLElement>) {
    const target = e.target as HTMLInputElement;

    dispatch(getRadioValue(target.value));
  }
  return (
    <section className=" border-b-2 pb-2">
      <h2 className=" font-bold text-gray-600 mb-2">Category</h2>
      <div>
        {CategoryOptions.map((item) => {
          return (
            <RadioInput
              label={item.label}
              value={item.value}
              name={item.name}
              onChange={handleOnClick}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Category;
