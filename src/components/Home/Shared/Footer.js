import React from 'react';

const Footer = () => {
  return (
    <div className='py-2'>
      <footer className="footer p-10 bg-black text-white">
        <div>
          <span className="footer-title">Upstore</span>
          <div className="flex gap-2 ">
            <p className=''>I</p>
            <p className=''>8819 Ohio St. South Gate, CA 90280</p>
          </div>
          <div className="flex gap-2 ">
            <p className=''>I</p>
            <p className=''>+1 386-688-3295</p>
          </div>
          <div className="flex gap-2 ">
            <p className=''>I</p>
            <p className=''>Ourstudio@hello.com</p>
          </div>
         

        </div>
        <div>
          <span className="footer-title">Offer</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
          <a className="link link-hover">Press kit</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Info</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
          <a className="link link-hover">Press kit</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Our Social Media</span>
    <div className="flex gap-4">
    <img src="https://i.ibb.co/Kr686bL/Vector-1.png" alt="lll" className='w-[30px]' />
    <img src="https://i.ibb.co/Kr686bL/Vector-1.png" alt="lll" className='w-[30px]' />
    <img src="https://i.ibb.co/Kr686bL/Vector-1.png" alt="lll" className='w-[30px]' />
    <img src="https://i.ibb.co/Kr686bL/Vector-1.png" alt="lll" className='w-[30px]' />
    </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;