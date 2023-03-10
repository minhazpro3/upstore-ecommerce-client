import React from "react";
import { AiFillHeart } from "react-icons/ai";
import badge from "./img/badge 1.png";
import truck from './img/truck.png'

const AddToCartVerified = () => {
  const star = (
    <div className="rating rating-xs space-x-1">
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
    <div className="text-xs">
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
  );

  return (
    <div className="bg-gray-200 h-screen p-4">
      <main className="bg-white py-10 px-4 flex flex-wrap gap-8">
        <div className="flex-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
          eius.
        </div>

        <div className="flex-1">
          <section>
            <div className="flex gap-2 sm:gap-4 w-max">
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

              <div className="flex pt-4 gap-5">
                <span className="font-bold">$ 799.2</span>
                <span className="opacity-40 line-through">$ 999.0</span>
              </div>

              <div className="pt-5 flex gap-6">
                <button
                  className="btn btn-sm text-xs px-5 rounded-lg border-none"
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

        <div className="flex-1">
          <main className="flex gap-4 justify-between items-baseline">
            <section className="flex flex-col gap-2 sm:gap-4 w-full">
              <p className="font-bold text-center underline">Skyline Store</p>
              <div className="flex gap-3 justify-between ">
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

            <section className="flex flex-col gap-2 sm:gap-4 w-full">
              <p className="font-bold text-xs underline text-center">
                Information
              </p>
              <div>{progress}</div>
            </section>
          </main>

          <main className="mt-5 p-2 bg-[#FBFAFA] flex flex-wrap gap-4">
            <section className="items-center flex flex-col justify-between border-r pr-2 pt-3 pb-1 flex-auto">
              <p className="font-[Poppins] font-semibold text-xs">
                Product Status
              </p>
              <div
                className="radial-progress text-[#3C7FEB] font-[Poppins] text-xs"
                style={{ "--value": 100, "--size": "3rem" }}
              >
                <span className="font-semibold text-black">100%</span>
              </div>
              <p className="text-xs opacity-40">Excellent</p>
            </section>

            <section className="items-center flex flex-col justify-between border-r pr-2 pt-3 pb-1 ">
              <p className="font-[Poppins] font-semibold text-xs">
                Verified by us
              </p>
              <p className="text-xs opacity-40">1 month Warranty</p>
              <img className="w-12 mx-1 my-2" src={badge} alt="" />
              <p className="text-xs opacity-40">
                This Product has been <br /> VERIFIED by an Expert
              </p>
            </section>

            <section className="items-center flex flex-col justify-between pt-3 pb-1 flex-auto">
              <p className="font-[Poppins] font-semibold text-xs">
                Est. Delivery Day
              </p>
              <img className="w-16 mx-auto my-3" src={truck} alt="" />
              <p className="text-xs opacity-40">3 - 5 Business days</p>
            </section>
          </main>
        </div>
      </main>
    </div>
  );
};

export default AddToCartVerified;
