import Category from "./Components/Category";
import Color from "./Components/Color";
import Price from "./Components/Price";

const SideBar = () => {
  return (
    <div className=" ml-7 sticky top-24 ">
      <Category />
      <Price />
      <Color />
    </div>
  );
};

export default SideBar;
