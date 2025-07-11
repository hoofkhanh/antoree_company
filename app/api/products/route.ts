import { filterByName, filterByPrice } from "@/lib/productFilters";
import { Product } from "@/types/product";
import { NextResponse } from "next/server";

const products =
  [
    {
      "id": 1,
      "name": "Khoá học Tiếng Anh giao tiếp",
      "price": 450000,
      "image": "https://mshoagiaotiep.com/uploads/images/userfiles/2021/t4/khoahoctienganhgiaotiepchuyennghiepdanhriengchonguoidilam.png",
      "shortDescription": "Giao tiếp hằng ngày với người bản xứ.",
      "longDescription": "Khóa học giúp bạn cải thiện kỹ năng giao tiếp tiếng Anh thông qua các tình huống thực tế. Học cùng giảng viên bản ngữ. Bao gồm 20 buổi học trực tuyến.",
      "rating": 4.7
    },
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
    {
      "id": 4,
      "name": "Khoá học Thiết kế UI/UX cơ bản",
      "price": 980000,
      "image": "https://png.pngtree.com/png-clipart/20210329/ourmid/pngtree-english-teaching-scene-network-online-english-classroom-png-image_3150344.jpg",
      "shortDescription": "Thiết kế giao diện người dùng hiện đại.",
      "longDescription": "Khóa học giới thiệu về nguyên lý thiết kế UI/UX, wireframes, prototyping và công cụ như Figma, Adobe XD.",
      "rating": 4.6
    },
    {
      "id": 5,
      "name": "Khóa học Data Science cho người mới",
      "price": 1550000,
      "image": "https://stepup.edu.vn/wp-content/uploads/2019/03/learn-english1-vicook-6e068f469abc86e7b50da7d64c57c3d1-min.jpg",
      "shortDescription": "Học về xử lý và phân tích dữ liệu.",
      "longDescription": "Tìm hiểu các công cụ như Pandas, NumPy, Matplotlib và học cách trực quan hóa và phân tích dữ liệu.",
      "rating": 4.7
    },
    {
      "id": 6,
      "name": "Lớp học Digital Marketing",
      "price": 990000,
      "image": "https://luanvan24.com/wp-content/uploads/2021/02/hinh-anh-de-tai-nghien-cuu-khoa-hoc-mon-tieng-anh-2.jpg",
      "shortDescription": "Học chiến lược quảng cáo online.",
      "longDescription": "Khóa học bao gồm SEO, Facebook Ads, Google Ads, content marketing và xây dựng thương hiệu cá nhân.",
      "rating": 4.5
    }
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

