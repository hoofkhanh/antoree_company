'use client';

import { Product } from '@/types/product';
import ProductCard from "@/components/product/ProductCard";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import ProductNameFilter from './ProductNameFilter';
import ProductPriceFilter from './ProductPriceFilter';
import Loading from '@/app/loading';


type ProductFilterProps = {
  initialProducts: Product[];
  page?: string;
}

const ProductFilter = (
  { initialProducts, page = '/' }
    : ProductFilterProps
) => {
  const [queryByName, setQueryByName] = useState<string>('');
  const [queryByPrice, setQueryByPrice] = useState<string>('');
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      const params = new URLSearchParams();
      if (queryByName) params.set("name", queryByName);
      if (queryByPrice) params.set("price", queryByPrice);
      router.push(`${page}?${params.toString()}`);
    }, 300);

    return () => clearTimeout(timeout);
  }, [queryByName, queryByPrice, router]);


  // loading khi vào trang
  useEffect(() => {
    const minLoading = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(minLoading);
  }, [initialProducts]);

  return (
    <div className="flex flex-col gap-5">
      <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
        <ProductNameFilter queryByName={queryByName} setQueryByName={setQueryByName} />
        <ProductPriceFilter setQueryByPrice={setQueryByPrice} />
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {initialProducts.map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductFilter