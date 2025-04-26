import {
  CircleUserRound,
  MessageSquare,
  Search,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import "./Navigation.css";
import { useDispatch } from "react-redux";
import { getSearchValue } from "../../../Redux/home/HomeSlice";

const Navigation = () => {
  const dispatch = useDispatch();

  function handleSearchValue(e: React.ChangeEvent<HTMLElement>) {
    const target = e.target as HTMLInputElement;

    dispatch(getSearchValue(target.value));
  }
  return (
    <div className=" flex justify-between items-center   h-20 px-10 shadow-md sticky top-0 z-40 bg-white">
      <nav>
        <a
          className=" font-bold text-2xl  text-emerald-800 flex justify-center items-center"
          href="#">
          SHOPIFY <ShoppingBag />
        </a>
      </nav>
      <section className="w-full  max-w-[400px] mx-3 ">
        <div className=" flex  w-full border justify-center items-center rounded-lg px-3">
          <input
            onChange={(e) => handleSearchValue(e)}
            type="text"
            placeholder="Enter your search"
            className=" border-none hover:outline-none active:outline-none active:border-none hover:border-none focus:outline-none w-full  py-2 ml-2"
          />
          <Search className=" text-gray-600" />
        </div>
      </section>
      <section className="navContainer">
        <ul className=" flex justify-between items-center ">
          <li>
            <a href="#">
              <CircleUserRound />
            </a>
          </li>
          <li>
            <a href="#">
              <MessageSquare />
            </a>
          </li>
          <li>
            <a href="#">
              <ShoppingCart />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Navigation;
