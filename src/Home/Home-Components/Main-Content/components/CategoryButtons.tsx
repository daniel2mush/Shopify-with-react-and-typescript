import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getRadioValue,
  getSearchValue,
} from "../../../../Redux/home/HomeSlice";

const CategoryButtons = () => {
  const buttons = ["All", "Adidas", "Nike", "Puma", "Vans"];
  const buttonItems = [
    {
      id: 0,
      text: "All",
      value: "",
    },
    { id: 1, text: "Adidas", value: "adidas" },
    {
      id: 2,
      text: "Nike",
      value: "nike",
    },
    {
      id: 3,
      text: "Puma",
      value: "puma",
    },
    {
      id: 4,
      text: "Vans",
      value: "vans",
    },
  ];
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(0);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>, id: number) {
    const target = e.target as HTMLButtonElement;
    console.log(target.value);

    dispatch(getSearchValue(target.value));
    setIsSelected(id);
    console.log(id);
  }

  return (
    <section className=" mx-3">
      <div>
        {buttonItems.map((item) => {
          return (
            <button
              key={item.id}
              value={item.value}
              onClick={(e) => handleClick(e, item.id)}
              className={` ${
                isSelected === item.id
                  ? "bg-green-800 text-white"
                  : "bg-white text-gray-800"
              } py-2 px-5 border rounded mr-4 hover:bg-green-800 hover:text-white active:bg-emerald-600 `}>
              {item.text}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryButtons;
