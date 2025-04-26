import { useDispatch } from "react-redux";
import RadioInput from "../../../../components/RadioInput";
import { InputCagetoryType } from "./Category";
import { getRadioValue } from "../../../../Redux/home/HomeSlice";

const Price = () => {
  const priceValue: InputCagetoryType[] = [
    {
      name: "price",
      label: "All",
      value: "",
    },
    {
      name: "price",
      label: "0 - $50",
      value: "50",
    },
    {
      name: "price",
      label: "$50 - $100",
      value: "100",
    },
    {
      name: "price",
      label: "$100 - $150",
      value: "150",
    },
    {
      name: "price",
      label: "$200 plus",
      value: "200",
    },
  ];

  const dispatch = useDispatch();
  function handleClick(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(getRadioValue(e.target.value));
  }
  return (
    <section className=" border-b-2 pb-2">
      <h2 className=" font-bold text-gray-600 mb-2">Price</h2>
      <div>
        {priceValue.map((item) => {
          return (
            <RadioInput
              label={item.label}
              value={item.value}
              name={item.name}
              onChange={handleClick}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Price;
