import { useDispatch } from "react-redux";
import RadioInput from "../../../../components/RadioInput";
import { InputCagetoryType } from "./Category";
import { ReactElement } from "react";
import { getRadioValue } from "../../../../Redux/home/HomeSlice";
import { Circle } from "lucide-react";

const ColorValue: InputCagetoryType[] = [
  {
    name: "category",
    label: "Red",
    value: "red",
  },
  {
    name: "category",
    label: "Green",
    value: "green",
  },
  {
    name: "category",
    label: "Black",
    value: "black",
  },
  {
    name: "category",
    label: "White",
    value: "white",
  },
];
const Color = () => {
  const dispatch = useDispatch();

  const handleOnClick = (e: React.ChangeEvent<HTMLElement>) => {
    const target = e.target as HTMLInputElement;
    dispatch(getRadioValue(target.value));
  };

  return (
    <section className=" border-b-2 pb-2">
      <h2 className=" font-bold text-gray-600 mb-2">Color</h2>
      <div>
        {ColorValue.map((item) => {
          return (
            <div className=" flex items-center justify-center">
              <Circle
                size={15}
                fill={
                  item.value === "red"
                    ? "red"
                    : item.value === "green"
                    ? "green"
                    : item.value === "black"
                    ? "black"
                    : "white"
                }
                color={item.value === "white" ? "gray" : "none"}
              />
              <RadioInput
                label={item.label}
                value={item.value}
                name={item.name}
                onChange={handleOnClick}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Color;
