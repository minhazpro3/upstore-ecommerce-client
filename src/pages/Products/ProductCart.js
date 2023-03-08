import React from 'react';
import ProductSidebar from './ProductSidebar';

const ProductCart = () => {
    return (
        <div>
             <div className='px-6'>
           
           
          <div className="flex gap-9 justify-center items-center">
            <div className="">
                <ProductSidebar/>
            </div>
            <div className="">
            <div className=' grid  sm:grid-cols-3 ga md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2  '>
               <div className="card w-96 bg-[#F5F5F5] shadow-xl">
                  <div className="flex justify-end px-6 mt-2">
                 <h1 className='hot-button-style2 px-6 py-2'>SELF</h1>
                  </div>
                   <figure className="px-10 mt-[-15px]">
                       <img src="https://i.ibb.co/ZSDz1Qk/wzieqfqdn5q6pnsdetim-removebg-preview.png" alt="Shoes" className="rounded-xl" />
                   </figure>
                   <div className="px-6">
                      <h1 className='font-bold text-2xl'>iPhone 14 pro max </h1>
                       <p className='py-2'>Lorem ipsum dolor sit am</p>
                       <div className="flex justify-end">
                           <h1 className='mx-1'>$32</h1>
                           <h1 className='mx-1 font-bold hot-color'>$75</h1>
                       </div>
                   </div>
               </div>


               
               <div className="card w-96 bg-[#F5F5F5] shadow-xl">
                  <div className="flex justify-end px-6 mt-2">
                 <h1 className='hot-button-style px-6 py-2'>HOT</h1>
                  </div>
                   <figure className="px-10 mt-[-20px]">
                       <img src="https://i.ibb.co/VD3Czsc/ipad-2022-hero-blue-wifi-select-FMT-WHH-2.png" alt="Shoes" className="rounded-xl" />
                   </figure>
                   <div className="p-5 px-6">
                      <h1 className='font-bold text-2xl'>iPhone 14 pro max </h1>
                       <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do </p>
                       <div className="flex justify-end">
                           <h1 className='mx-1'>$32</h1>
                           <h1 className='mx-1 font-bold hot-color'>$75</h1>
                       </div>
                   </div>
               </div>
               <div className="card w-96 bg-[#F5F5F5] shadow-xl">
                  <div className="flex justify-end px-6 mt-2">
                 <h1 className='hot-button-style3 px-6 py-2'>OUT OF STOCK</h1>
                  </div>
                   <figure className="px-10 mt-[-20px]">
                       <img src="https://i.ibb.co/ZSDz1Qk/wzieqfqdn5q6pnsdetim-removebg-preview.png" alt="Shoes" className="rounded-xl" />
                   </figure>
                   <div className="p-5 px-6">
                      <h1 className='font-bold text-2xl'>iPhone 14 pro max </h1>
                       <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do </p>
                       <div className="flex justify-end">
                           <h1 className='mx-1'>$32</h1>
                           <h1 className='mx-1 font-bold hot-color'>$75</h1>
                       </div>
                   </div>
               </div>
               <div className="card w-96 bg-[#F5F5F5] shadow-xl">
                  <div className="flex justify-end px-6 mt-2">
                 <h1 className='hot-button-style px-6 py-2'>HOT</h1>
                  </div>
                   <figure className="px-10 mt-[-20px]">
                       <img src="https://i.ibb.co/ZSDz1Qk/wzieqfqdn5q6pnsdetim-removebg-preview.png" alt="Shoes" className="rounded-xl" />
                   </figure>
                   <div className="p-5 px-6">
                      <h1 className='font-bold text-2xl'>iPhone 14 pro max </h1>
                       <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do </p>
                       <div className="flex justify-end">
                           <h1 className='mx-1'>$32</h1>
                           <h1 className='mx-1 font-bold hot-color'>$75</h1>
                       </div>
                   </div>
               </div>
               <div className="card w-96 bg-[#F5F5F5] shadow-xl">
                  <div className="flex justify-end px-6 mt-2">
                 <h1 className='hot-button-style2 px-6 py-2'>SELF</h1>
                  </div>
                   <figure className="px-10 mt-[-20px]">
                       <img src="https://i.ibb.co/ZSDz1Qk/wzieqfqdn5q6pnsdetim-removebg-preview.png" alt="Shoes" className="rounded-xl" />
                   </figure>
                   <div className="p-5 px-6">
                      <h1 className='font-bold text-2xl'>iPhone 14 pro max </h1>
                       <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do </p>
                       <div className="flex justify-end">
                           <h1 className='mx-1'>$32</h1>
                           <h1 className='mx-1 font-bold hot-color'>$75</h1>
                       </div>
                   </div>
               </div>
               <div className="card w-96 bg-[#F5F5F5] shadow-xl">
                  <div className="flex justify-end px-6 mt-2">
                 <h1 className='hot-button-style px-6 py-2'>HOT</h1>
                  </div>
                   <figure className="px-10 mt-[-20px]">
                       <img src="https://i.ibb.co/ZSDz1Qk/wzieqfqdn5q6pnsdetim-removebg-preview.png" alt="Shoes" className="rounded-xl" />
                   </figure>
                   <div className="p-5 px-6">
                      <h1 className='font-bold text-2xl'>iPhone 14 pro max </h1>
                       <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do </p>
                       <div className="flex justify-end">
                           <h1 className='mx-1'>$32</h1>
                           <h1 className='mx-1 font-bold hot-color'>$75</h1>
                       </div>
                   </div>
               </div>
            

           </div>
            </div>

          </div>
       </div>
        </div>
    );
};

export default ProductCart;