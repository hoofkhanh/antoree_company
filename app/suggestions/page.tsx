import ProductFilter from "@/components/product/ProductFilter";
import { fetchApi } from "@/lib/api";
import { Product } from "@/types/product";
import { SearchParamProps } from "@/types/searchParams";

export default async function Page({ searchParams }: SearchParamProps) {
  const resolvedSearchParams = await searchParams;
  const name: string = (resolvedSearchParams?.name as string) ?? '';
  const price: string = (resolvedSearchParams?.price as string) ?? '';

  const products: Product[] = await fetchApi('suggestions', name, price);

  return <ProductFilter initialProducts={products} page='/suggestions' />
}