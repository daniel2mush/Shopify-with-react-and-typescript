import { Heart, ShoppingCart } from "lucide-react";
import { ProductType } from "../db/products";

const Card = (product: ProductType) => {
  return (
    <section className=" w-40 h-52 border rounded-md shadow-md p-2 flex  flex-col justify-between ">
      <div className=" h-20 w-full  ">
        <img
          src={product.img}
          alt={product.title}
          className=" h-full object-contain hover:scale-100 scale-75 transition-all duration-150 "
        />
      </div>
      <div className=" text-gray-700 font-bold text-[12px] ">
        {" "}
        {product.title}
      </div>
      <div className=" text-gray-500 text-[10px]">{product.company}</div>
      <div className=" flex justify-between">
        <div className=" flex ">
          {product.star}
          {product.star}
          {product.star}
          {product.star}
        </div>
        <div className=" text-gray-500 text-[10px]">{product.reviews}</div>
      </div>
      <div className=" flex justify-between text-[10px] font-bold ">
        <del>{product.prevPrice}</del>
        <p>${product.newPrice}</p>
      </div>
      <div className=" flex  justify-between w-full">
        <button>
          {" "}
          <Heart size={15} />
        </button>
        <button>
          {" "}
          <ShoppingCart size={15} />
        </button>
      </div>
    </section>
  );
};

export default Card;
