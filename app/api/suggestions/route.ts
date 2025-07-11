import { filterByName, filterByPrice } from "@/lib/productFilters";
import { Product } from "@/types/product";
import { NextResponse } from "next/server";

const products =
  [
    {
      "id": 2,
      "name": "Giáo trình Lập trình Web",
      "price": 850000,
      "image": "https://benative.vn/wp-content/uploads/2019/03/khoa-hoc-tieng-anh-giao-tiep-co-ban-benative.jpg",
      "shortDescription": "Giáo trình từ cơ bản đến nâng cao.",
      "longDescription": "Giáo trình chi tiết HTML, CSS, JavaScript và React. Bao gồm ví dụ thực tế, bài tập cuối chương và file thực hành.",
      "rating": 4.8
    },
    {
      "id": 3,
      "name": "Lớp học Python cơ bản",
      "price": 1200000,
      "image": "https://astarequivalency.co.uk/app/uploads/2022/06/Product-images-03_1.jpg",
      "shortDescription": "Học Python từ đầu trong 1 tháng.",
      "longDescription": "Khoá học này dành cho người mới bắt đầu muốn học Python từ A đến Z. Có bài kiểm tra và chứng chỉ sau khi hoàn thành.",
      "rating": 4.9
    },
  ];

// get products => filterByName => filterByPrice
export async function GET(request: Request): Promise<NextResponse<Product[]>> {
  const { searchParams } = new URL(request.url);
  const name: string = searchParams.get('name') || '';
  const priceStr: string = searchParams.get('price') || '';

  let filteredProducts: Product[] = filterByName(products, name);
  filteredProducts = filterByPrice(filteredProducts, priceStr);
  return NextResponse.json(filteredProducts);
}

