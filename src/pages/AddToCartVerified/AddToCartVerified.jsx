import React from "react";
import { AiFillHeart } from "react-icons/ai";

const AddToCartVerified = () => {
  const star = (
    <div className="rating rating-sm space-x-1">
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

  const progress = (
    <div className="space-y-3.5">
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
  );

  return (
    <div className="bg-gray-200 h-screen p-4">
      <main className="bg-white py-10 px-4 flex justify-between flex-wrap gap-8">
        
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, eius.
        </div>
        
        <div>
          <section>
            <div className="flex justify-between gap-4">
              <p className="text-xs bg-[#FFC900] rounded-xl px-2.5 py-0.5">
                -10%
              </p>

              <p className="text-xs bg-[#40C455] rounded-xl px-5 py-0.5 text-white">
                Verified
              </p>

              <p className="text-xs font-bold flex gap-2">
                Add to Wishlist
                <AiFillHeart className="text-xl text-red-500"></AiFillHeart>
              </p>
            </div>

            <article>
              <p className="font-bold pt-4 text-lg">
                Apple iPhone 12 Pro Max <br /> 128GB - Dual Sim
              </p>
              <small className="opacity-50 text-xs">
                6.7" Super Retina OLED
              </small>

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
            </article>
          </section>
        </div>

        <div>
          <main className="flex gap-6 justify-between">
            <section>
              <p className="font-bold text-center">Skyline Store</p>
              <div className="flex gap-4 justify-between pt-3">
                <div className="self-end">
                  <p>
                    <span className="text-2xl font-semibold">4.9 </span>
                    <span className="opacity-50">/ 5</span>
                  </p>
                  <div>{star}</div>
                  <p className="text-xs opacity-50">(721+) Rating</p>
                </div>

                <div className="flex flex-col space-y-1">
                  {star}
                  {star}
                  {star}
                  {star}
                  {star}
                </div>
              </div>
            </section>

            <section>
              <p className="font-bold text-xs border-b-2 border-black">
                Store information
              </p>
              <div className="pt-3">{progress}</div>
            </section>
          </main>
        </div>
      </main>
    </div>
  );
};

export default AddToCartVerified;
