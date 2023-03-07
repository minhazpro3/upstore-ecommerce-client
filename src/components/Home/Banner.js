import React from "react";
import image1 from "../../images/Rectangle 3.png";

const Banner = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-stone-500 to-stone-800  ">
        <div className="carousel w-full container mx-auto px-8 md:px-0">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center sm:px-20 md:px-28 gap-2 ">
              <div>
                <h2 className="text-white text-4xl md:text-6xl font-bold font-amaranth  my-10 md:mb-14 md:my-0">
                  The Winter is Yours
                </h2>
                <p className="text-white">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here',
                </p>
                <button className="btn btn-warning  rounded-full px-8 py-1 mt-5  sm:mt-12 md:mt-16">
                  Warning
                </button>
              </div>
              <div>
                <img
                  width="706px"
                  height="573px"
                  src={image1}
                  className="w-full "
                  alt="bannerImage"
                />
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3 md:top-1/2 mb-16 md:mb-0">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* <div id="slide2" className="carousel-item relative w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center sm:px-20 md:px-28 gap-2 ">
              <div>
                <h2 className="text-white text-4xl md:text-6xl font-bold font-amaranth  my-10 md:mb-14 md:my-0">
                  The Winter is Yours
                </h2>
                <p className="text-white">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here',
                </p>
                <button className="btn btn-warning  rounded-full px-8 py-1 mt-5  sm:mt-12 md:mt-16">
                  Warning
                </button>
              </div>
              <div>
                <img
                  width="706px"
                  height="573px"
                  src={image1}
                  className="w-full "
                  alt="bannerImage"
                />
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3 md:top-1/2 mb-16 md:mb-0">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div> */}

          {/* <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/1ntJP7Q/side.jpg"
            className="w-full"
            alt="bannerImage"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div> */}
          {/* <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/1ntJP7Q/side.jpg"
            className="w-full"
            alt="bannerImage"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div> */}
          {/* <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/1ntJP7Q/side.jpg"
            className="w-full"
            alt="bannerImage"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
