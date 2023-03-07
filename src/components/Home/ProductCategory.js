import React from "react";

const ProductCategory = () => {
  const products = [
    {
      id: 1,
      link: "https://i.ibb.co/B2ZcYmb/purepng-1.png",
      title: "Camera",
    },
    {
      id: 2,
      link: "https://i.ibb.co/q04gYDg/gaming-and-vr-removebg-preview.png",
      title: "Gaming & VR",
    },
    {
      id: 3,
      link: "https://i.ibb.co/VjBr0M1/phones-and-tablets-removebg-preview.png",
      title: "Cell phones & tablets",
    },
    {
      id: 3,
      link: "https://i.ibb.co/KNjDHVm/Headphones-Transparent-PNG-1.png",
      title: "Music & Audio",
    },
  ];

  return (
    <div className="container relative mx-auto px-8 md:px-0 my-14">
      <h3 className="text-6xl text-center font-amaranth">Product Categories</h3>
      <div className=" relative">
        {" "}
        <div className=" absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 top-1/3 md:top-1/2 mb-16 md:mb-0">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide7" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div className="carousel w-full absolute top-16 md:top-28  ">
        <div id="slide6" className="carousel-item flex justify-center  w-full ">
          <div className="grid grid-cols-1 md:grid-cols-4  gap-8">
            {products.map((product) => (
              <div key={product.id} className="card w-56 h-60 bg-[#F0F0F0] ">
                <figure className="px-10 pt-10">
                  <img src={product.link} alt="Shoes" className="rounded-xl " />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{product.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="slide7" className="carousel-item  w-full">
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
