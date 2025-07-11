import type { Product } from "@/types/product";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
if (!BASE_URL) throw new Error("Thiếu biến môi trường NEXT_PUBLIC_BASE_URL");

export async function fetchApi(
  apiName: string, name: string = '', price: string = ''
): Promise<Product[]> {
  const params = new URLSearchParams();
  if (name) params.set('name', name);
  if (price) params.set('price', price);
  const url = `${BASE_URL}/api/${apiName}?${params.toString()}`;
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error("Lỗi gọi api: " + apiName);
  return res.json();
}