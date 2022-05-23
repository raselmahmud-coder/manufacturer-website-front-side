import React, { useEffect, useState } from "react";
import "./Purchase.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SpinnerCircular } from "spinners-react";

const Purchase = () => {
  const [src, setSrc] = useState({
    src: `https://demo.smartaddons.com/templates/html/autoparts/image/catalog/demo/product/400/1.jpg`,
    isLoading: false,
  });

  // console.log("src", src.src);
  const [count, setCount] = useState(0);
  const [orderError, setOrderError] = useState({
    minOderError: "",
    maxOrderError: "",
  });
  const [tool, setTool] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const handleInputValue = (e) => {
    const number = +e.target.value;
    setCount(number);
  };
  useEffect(() => {
    if (count < 10) {
      setOrderError({ minOderError: "Min Order 10 Quantity Per Unit" });
      // console.log("min order error");
    } else if (count > tool?.quantity) {
      setOrderError({ maxOrderError: "Sorry! Not Available" });
      // console.log("max order error");
    } else {
      setOrderError({ minOderError: "" });
      setOrderError({ maxOrderError: "" });
    }
  }, [count, id, tool?.quantity]);
  if (id) {
    axios.get(`http://localhost:5000/tool/${id}`).then((res) => {
      if (res.status === 200) {
        setLoading(false);
        return setTool(res.data);
      }
    });
  }
  if (loading) {
    return (
      <>
        <SpinnerCircular
          speed={120}
          color={"#0FCFEC"}
          style={{ margin: "0px auto", display: "block" }}
        />
      </>
    );
  }
  const handleLoading = () => {
    setSrc({...src, isLoading: true });
  };
// console.log("srouce",src);
  return (
    <>
      <section>
        <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
          <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
            <div className="grid gap-4 grid-cols-1">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  alt="Mobile Phone Stand"
                  className="object-cover rounded-xl"
                  src={tool?.image}
                />
              </div>

              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:mt-4">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    onLoad={handleLoading}
                    alt="Mobile Phone Stand"
                    className="object-cover rounded-xl"
                    src={src?.src}
                  />
                  {!src.isLoading && (
                    <SpinnerCircular
                      speed={120}
                      color={"#0FCFEC"}
                      style={{ margin: "0px auto", display: "block" }}
                    />
                  )}
                </div>

                <div className="aspect-w-1 aspect-h-1">
                  <img
                    alt="Mobile Phone Stand"
                    className="object-cover rounded-xl"
                    src="https://demo.smartaddons.com/templates/html/autoparts/image/catalog/demo/product/400/2.jpg"
                  />
                  {!src.isLoading && (
                    <SpinnerCircular
                      speed={120}
                      color={"#0FCFEC"}
                      style={{ margin: "0px auto", display: "block" }}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="sticky top-0">
              <strong className="border border-blue-600 rounded-full tracking-wide px-3 font-medium py-0.5 text-xs bg-gray-100 text-blue-600">
                Pre Order
              </strong>
              <div className="flex justify-between mt-8">
                <div className="max-w-[35ch]">
                  <h1 className="text-3xl tracking-wider uppercase font-bold">
                    {tool?.name}
                  </h1>

                  <p className="mt-0.5 text-sm">Highest Rated Product</p>

                  <div className="flex mt-2 -ml-0.5">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                </div>

                <p className="text-lg font-bold">Price: $ {tool?.price}</p>
              </div>

              <details className="relative mt-4 group">
                <summary className="block">
                  <div>
                    <div className="prose max-w-none group-open:hidden">
                      <p>{tool.description}...</p>
                    </div>
                    <span className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                      Read More
                    </span>
                  </div>
                </summary>
              </details>
              <div className="mt-8">
                <fieldset>
                  <div className="flex justify-between flex-wrap my-8">
                    <legend className="mb-1 text-2xl uppercase text-center font-medium">
                      Colors
                    </legend>
                    <div className="flex justify-evenly">
                      <label
                        htmlFor="color_tt"
                        className="cursor-pointer p-0.5"
                      >
                        <input
                          type="radio"
                          name="color"
                          id="color_tt"
                          className="sr-only peer"
                        />

                        <span className="inline-block px-3 py-1 text-xl border rounded-full group peer-checked:bg-black peer-checked:text-white">
                          Texas Tea
                        </span>
                      </label>

                      <label
                        htmlFor="color_fr"
                        className="cursor-pointer p-0.5"
                      >
                        <input
                          type="radio"
                          name="color"
                          id="color_fr"
                          className="sr-only peer"
                        />

                        <span className="inline-block px-3 py-1 text-xl border rounded-full group peer-checked:bg-black peer-checked:text-white">
                          Fiesta Red
                        </span>
                      </label>

                      <label
                        htmlFor="color_cb"
                        className="cursor-pointer p-0.5"
                      >
                        <input
                          type="radio"
                          name="color"
                          id="color_cb"
                          className="sr-only peer"
                        />

                        <span className="inline-block px-3 py-1 text-xl border rounded-full group peer-checked:bg-black peer-checked:text-white">
                          Cobalt Blue
                        </span>
                      </label>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="mt-4">
                  <div className="flex justify-between flex-wrap my-6">
                    <legend className="mb-1 text-2xl uppercase text-center font-medium">
                      Size
                    </legend>
                    <label htmlFor="size_xs" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="size"
                        id="size_xs"
                        className="sr-only peer"
                      />

                      <span className="inline-flex items-center justify-center w-8 h-8 text-xl border rounded-full group peer-checked:bg-black peer-checked:text-white">
                        XS
                      </span>
                    </label>

                    <label htmlFor="size_s" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="size"
                        id="size_s"
                        className="sr-only peer"
                      />

                      <span className="inline-flex items-center justify-center w-8 h-8 text-xl border rounded-full group peer-checked:bg-black peer-checked:text-white">
                        S
                      </span>
                    </label>

                    <label htmlFor="size_m" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="size"
                        id="size_m"
                        className="sr-only peer"
                      />

                      <span className="inline-flex items-center justify-center w-8 h-8 text-xl border rounded-full group peer-checked:bg-black peer-checked:text-white">
                        M
                      </span>
                    </label>

                    <label htmlFor="size_l" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="size"
                        id="size_l"
                        className="sr-only peer"
                      />

                      <span className="inline-flex items-center justify-center w-8 h-8 text-xl border rounded-full group peer-checked:bg-black peer-checked:text-white">
                        L
                      </span>
                    </label>

                    <label htmlFor="size_xl" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="size"
                        id="size_xl"
                        className="sr-only peer"
                      />

                      <span className="inline-flex items-center justify-center w-8 h-8 text-xl border rounded-full group peer-checked:bg-black peer-checked:text-white">
                        XL
                      </span>
                    </label>
                  </div>
                </fieldset>
                <h1 className="text-3xl text-center my-2">
                  Available Quantity {tool?.quantity}
                </h1>
                <div className="flex justify-between items-center mt-8">
                  <div>
                    <input
                      type="number"
                      id="quantity"
                      value={count}
                      onChange={handleInputValue}
                      placeholder="Min 10 Qty/Unit"
                      className="w-32 text-black py-3 text-xs text-center border-gray-200 rounded no-spinners mr-3"
                    />
                  </div>
                  <button
                    className="inline-flex justify-center items-center mr-1 w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                    onClick={() => setCount(count + 1)}
                  >
                    <i>
                      <AiOutlinePlus />
                    </i>
                  </button>

                  <button
                    className="inline-flex justify-center items-center ml-1 w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                    onClick={() => setCount(count - 1)}
                  >
                    <i>
                      <AiOutlineMinus />
                    </i>
                  </button>
                  <button
                    disabled={
                      orderError.maxOrderError || orderError.minOderError
                    }
                    type="submit"
                    className={`${(orderError.maxOrderError || orderError.minOderError) && 'cursor-not-allowed'} block px-5 py-3 ml-3 text-xs font-medium text-white bg-green-400 rounded hover:bg-green-300`}
                  >
                    Add to Cart
                  </button>
                </div>
                {orderError.minOderError && (
                  <p className="text-red-600 text-xl text-center mt-3">
                    {orderError.minOderError}
                  </p>
                )}
                {orderError.maxOrderError && (
                  <p className="text-red-600 text-xl text-center mt-3">
                    {orderError.maxOrderError}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Purchase;
