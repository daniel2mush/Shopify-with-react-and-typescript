import Card from "../../../../components/Card";
import CategoryButtons from "./CategoryButtons";
import data from "../../../../db/products";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFiltredProducts } from "../../../../Redux/home/HomeSlice";
import { useAppSelector } from "../../../../Redux/home/HomeStore";

const Content = () => {
  const { query, itemClicked, products } = useAppSelector(
    (state) => state.homeState
  );

  const dispatch = useDispatch();
  console.log(query);

  const getProducts = () => {
    dispatch(
      getFiltredProducts({
        data,
        query,
        itemClicked,
      })
    );
  };
  useEffect(() => {
    getProducts();
  }, [query, itemClicked]);

  return (
    <section className=" px-5 py-2 ">
      <div>
        <CategoryButtons />
      </div>
      <div className=" flex flex-wrap gap-3 items-center mt-10 w-full">
        {products.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            category={item.category}
            color={item.color}
            company={item.company}
            img={item.img}
            newPrice={item.newPrice}
            prevPrice={item.prevPrice}
            reviews={item.reviews}
            star={item.star}
            id={item.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Content;
