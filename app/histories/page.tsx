'use client';

import { Product } from '@/types/product';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import ProductFilter from '@/components/product/ProductFilter';
import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';
import GlobalError from '../global-error';
import { filterByName, filterByPrice } from '@/lib/productFilters';

const Page = () => {
  const searchParams = useSearchParams();
  const name: string = searchParams.get("name") || "";
  const price: string = searchParams.get("price") || "";

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const histories: Product[] = useSelector((state: RootState) => state.historyReducer.historyProducts);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      const result = filterByPrice(filterByName(histories, name), price);
      setFilteredProducts(result);
    } catch (err: unknown) {
      setError(new Error("Đã xảy ra lỗi khi lọc sản phẩm ở trang lich sử: " + err));
    }
  }, [histories, name, price]);

  if (error) return <GlobalError error={error} reset={() => setError(null)} />;

  return <ProductFilter initialProducts={filteredProducts} page='/histories' />
}

export default Page