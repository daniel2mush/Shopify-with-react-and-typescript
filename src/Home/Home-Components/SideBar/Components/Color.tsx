import { useDispatch } from "react-redux";
import RadioInput from "../../../../components/RadioInput";
import { InputCagetoryType } from "./Category";
import { ReactElement } from "react";
import { getRadioValue } from "../../../../Redux/home/HomeSlice";
import { Circle } from "lucide-react";

const ColorValue: InputCagetoryType[] = [
  {
    name: "color",
    label: "All",
    value: "",
  },
  {
    name: "color",
    label: "Red",
    value: "red",
  },
  {
    name: "color",
    label: "Green",
    value: "green",
  },
  {
    name: "color",
    label: "Black",
    value: "black",
  },
  {
    name: "color",
    label: "Blue",
    value: "blue",
  },
  {
    name: "color",
    label: "White",
    value: "white",
  },
];

const Color = () => {
  const dispatch = useDispatch();
  const gradientId = "colorSwatchGradient";

  const handleOnClick = (e: React.ChangeEvent<HTMLElement>) => {
    const target = e.target as HTMLInputElement;
    console.log(target.value);

    dispatch(getRadioValue(target.value));
  };

  return (
    <section className=" border-b-2 pb-2">
      <h2 className=" font-bold text-gray-600 mb-2">Color</h2>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff0000" />
            <stop offset="100%" stopColor="#0000ff" />
          </linearGradient>
        </defs>
      </svg>

      <div>
        {ColorValue.map((item) => {
          const isGradient = item.value.trim() === "";

          return (
            <div className=" flex items-center justify-center" key={item.value}>
              <Circle
                size={15}
                fill={
                  isGradient
                    ? `url(#${gradientId})`
                    : item.value === "red"
                    ? "red"
                    : item.value === "green"
                    ? "green"
                    : item.value === "black"
                    ? "black"
                    : item.value === "blue"
                    ? "blue"
                    : item.value === "white"
                    ? "white"
                    : "transparent"
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
