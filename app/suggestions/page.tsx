import ProductFilter from "@/components/product/ProductFilter";
import { fetchApi } from "@/lib/api";
import { Product } from "@/types/product";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams;
  const name: string = (resolvedSearchParams?.name as string) ?? '';
  const price: string = (resolvedSearchParams?.price as string) ?? '';

  const products: Product[] = await fetchApi('suggestions', name, price);

  return <ProductFilter initialProducts={products} page='/suggestions' />
}