'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Product } from "@/types/product";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { toggleHistory } from "@/lib/features/historySlices";

type ProductDetailModalProps = {
  product: Product;
}

const ProductDetailModal = ({ product }: ProductDetailModalProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const saveHistory = (product: Product): void => {
    const histories: Product[] = JSON.parse(localStorage.getItem('historyProducts') || '[]');

    const index = histories.findIndex(item => item.id === product.id);
    if (index !== -1) {
      histories.splice(index, 1);
    }
    histories.unshift(product);

    dispatch(toggleHistory(product));
    localStorage.setItem('historyProducts', JSON.stringify(histories));
  }

  return (
    <Dialog >
      <DialogTrigger asChild >
        <Button onClick={() => saveHistory(product)} className="w-full bg-antoree p-3 rounded cursor-pointer">
          Xem chi tiết
        </Button>
      </DialogTrigger>
      <DialogContent className="p-4">
        <DialogHeader >
          <DialogTitle className="text-center">{product.name}</DialogTitle>
          <DialogDescription className="text-center break-words w-106 sm:w-120">
            {product.longDescription}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-4">
          <Image
            src={product.image}
            alt={product.name}
            height={400}
            width={400}
            className="object-cover rounded"
          />
          <div className="text-lg font-semibold text-antoree">
            Giá: {product.price.toLocaleString()}₫
          </div>
          <div className="text-lg font-semibold text-yellow-500">
            Đánh giá: {product.rating}/5.0
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProductDetailModal