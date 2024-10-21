
import React from 'react';

import { AbstractIntlMessages } from 'next-intl';
import { CategoryForFront } from '@/app/[locale]/admin/category/util/CategoryForFront';
import Link from 'next/link';
import { Product } from '@prisma/client';
import { ProductForFront } from '@/app/[locale]/admin/products/_utils/ProductForFront';
import ProductMarketCard from './ProductMarketCard';
interface Props {
    products: ProductForFront[];
    locale : string,
    messages : AbstractIntlMessages,
    
  }
const ProductMarket = ({ products,locale,messages } : Props) => {
  const request = (messages as any).HomePage.requestproduct;
  const details = (messages as any).HomePage.details;
  const buy = (messages as any).Common.buy;
  return (
    <div className="flex-100 sm:flex-20 py-2">
    <div className=" py-3 text-center rounded-md shadow-xl border border-gray-200">
    
        {locale == 'en' ? <div className="mt-4 px-2 ">
            
        </div>
        : 
        <div className="mt-4 font-arabic px-2">
          <span></span>
        </div>
          }
          <div className='grid sm:grid-cols-4 w-11.7/12 mx-auto sm:gap-6 gap-4'>
          {products.map((product) => (
            <ProductMarketCard product={product} locale='locale' messages={messages}  />
          ))}
          </div>
          

    </div>
    </div>
  );
};

export default ProductMarket;

