import React from 'react';
import ProductHero from './ProductHero';
import CategoriesNavbar from './CategoriesNavbar';
import ProductCart from './ProductCart';
import RecentlyViewed from './RecentlyViewed';

const Products = () => {
    return (
        <div className='mx-6'>
          
          <ProductHero/> 
          <CategoriesNavbar/>
          <ProductCart/>
          <RecentlyViewed/>
        </div>
    );
};

export default Products;