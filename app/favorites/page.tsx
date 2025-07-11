"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductFilter from "@/components/product/ProductFilter";
import type { Product } from "@/types/product";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import GlobalError from "../global-error";
import { filterByName, filterByPrice } from "@/lib/productFilters";

export default function FavoritesPage() {
  const searchParams = useSearchParams();
  const name: string = searchParams.get("name") || "";
  const price: string = searchParams.get("price") || "";

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const favorites: Product[] = useSelector((state: RootState) => state.favoriteReducer.favoriteProducts);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      const result = filterByPrice(filterByName(favorites, name), price);
      setFilteredProducts(result);
    } catch (error: unknown) {
      setError(new Error("Đã xảy ra lỗi khi lọc sản phẩm ở trang yêu thích sản phẩm: " + error));
    }
  }, [favorites, name, price]);

  if (error) return <GlobalError error={error} reset={() => setError(null)} />;

  return <ProductFilter initialProducts={filteredProducts} page='/favorites' />
}
