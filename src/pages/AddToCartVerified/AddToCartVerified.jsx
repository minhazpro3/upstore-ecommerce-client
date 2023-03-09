import React from "react";
import { AiFillHeart } from "react-icons/ai";

const AddToCartVerified = () => {
  const star = (
    <div className="rating rating-sm space-x-2">
      <input
        type="radio"
        name="rating-6"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-6"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-6"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-6"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-6"
        className="mask mask-star-2 bg-orange-400"
      />
    </div>
  );

  return (
    <div className="bg-gray-200 h-screen p-4">
      <main className="bg-white py-10 px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-14 gap-y-10 ">
        <section></section>

        <section>
          <div className="flex justify-between">
            <div className="flex items-center">
              <p className="text-xs bg-[#FFC900] rounded-xl px-2.5 py-0.5 mr-4">
                -10%
              </p>
              <p className="text-xs bg-[#40C455] rounded-xl px-5 py-0.5 text-white">
                Verified
              </p>
            </div>

            <div className="flex items-center">
              <p className="text-xs font-bold mr-5">Add to Wishlist</p>
              <AiFillHeart className="text-2xl text-red-500"></AiFillHeart>
            </div>
          </div>

          <article className="font-bold pt-4 text-lg">
            Apple iPhone 12 Pro Max <br /> 128GB - Dual Sim
          </article>
          <small className="opacity-50 text-xs">6.7" Super Retina OLED</small>

          <div className="flex pt-4">
            <span className="font-bold mr-6">$ 799.2</span>
            <span className="opacity-40 line-through">$ 999.0</span>
          </div>

          <div className="pt-5">
            <button
              className="btn btn-sm text-xs px-5 rounded-lg border-none  mr-6"
              style={{ background: "rgba(12, 182, 255, 0.84)" }}
            >
              Buy Now
            </button>

            <button
              className="btn btn-sm text-xs px-5 rounded-lg border-none"
              style={{ background: "rgba(255, 99, 12, 0.84)" }}
            >
              Add to Cart
            </button>
          </div>
        </section>

        <section>
          <main className="flex gap-10">
            <div>
              <p className="font-bold text-center">Skyline Store</p>

              <div className="flex gap-6 pt-5">
                <div className="self-end">
                  <p>
                    <span className="text-2xl font-semibold">4.9 </span>
                    <span className="opacity-50">/ 5</span>
                  </p>

                  <div className="">{star}</div>

                  <p className="text-xs opacity-50">(721+) Rating</p>
                </div>

                <div className="flex flex-col space-y-2">
                  {star}
                  {star}
                  {star}
                  {star}
                  {star}
                </div>
              </div>
            </div>

            <div>
              <p className="font-bold text-xs w-max border-b-[1px] border-black">
                Store information
              </p>

              <div className="pt-5 w-full xl:w-full md:w-48 sm:w-48">
                <progress
                  className="progress progress-warning"
                  value="0"
                  max="100"
                ></progress>
                <progress
                  className="progress progress-warning"
                  value="10"
                  max="100"
                ></progress>
                <progress
                  className="progress progress-warning"
                  value="40"
                  max="100"
                ></progress>
                <progress
                  className="progress progress-warning"
                  value="70"
                  max="100"
                ></progress>
                <progress
                  className="progress progress-warning"
                  value="100"
                  max="100"
                ></progress>
              </div>
            </div>
          </main>

          <div>
            
          </div>
        </section>
      </main>
    </div>
  );
};

export default AddToCartVerified;
