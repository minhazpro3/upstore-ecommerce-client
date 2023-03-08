import React from 'react';

const ProductHero = () => {
    return (
        <div className="px-6">

            <div className=' grid p-6 sm:grid-cols-3 ga md:grid-cols-2 lg:grid-cols-2 gap-2 mt-2 justify-center  items-center'>
                <div className=" p-5 lg:w-[540px]">
                    <h1 className='text-4xl font-bold py-6'>Top tech of the day</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing <br></br> elit. Neque asperiores odit rem quidem,  </p>
                </div>
                <div className="flex bg-[#505050] p-5 py-2 lg:ml-[-250px]">
                   <div className="">
                   <img src="https://i.ibb.co/Lt2nt1X/252-2520529-oculus-go-oculus-virtual-reality-headset-png-transparent-removebg-preview-1-1.png" alt="" />
                   </div>
                   <div className="">
                   <div className="">
                   <img src="https://i.ibb.co/nrk02qW/PS5-Controller-PNG-Image-1.png" alt="" />
                   </div>
                   <div className="text-2xl">
                   <img src="https://i.ibb.co/Gt2mm5q/62fbbfaf342f1f906d378073-1.png" alt="" />
                   </div>
                   </div>
                  <div className="">
                  <div className="mr-12">
                   <img src="https://i.ibb.co/prYkzKZ/ipad-2022-hero-blue-wifi-select-FMT-WHH-1.png" alt="" />
                   
                   </div>
                  <div className="">
                   <img src="https://i.ibb.co/8Y9JkN7/MP6-V3ref-VW-PF-watch-40-alum-starlight-nc-se-VW-PF-WF-SI-1.png" alt="" />
                   
                   </div>
                   
                  </div>
                   
                </div>

            </div>

        </div>
    );
};

export default ProductHero;



