import SideBar from "../SideBar/SideBar";
import Content from "./components/Content";

const MainContent = () => {
  return (
    <section className=" flex my-5 w-full relative">
      <div className=" w-56  border-r-4  ">
        <SideBar />
      </div>
      <div className=" flex 1  w-full">
        <Content />
      </div>
    </section>
  );
};

export default MainContent;
