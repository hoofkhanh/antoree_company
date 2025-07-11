'use client';

import type { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';
import ProductDetailModal from "./ProductDetailModal";
import { Heart, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { toggleFavorite } from "@/lib/features/favoriteSlices";
import { toast } from "sonner";
import { useEffect, useState } from "react";

type ProductCardProps = {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const favorites: Product[] = useSelector((state: RootState) => state.favoriteReducer.favoriteProducts);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.some(p => p.id == product.id));
  }, [favorites]);

  const deleteOrSaveFavorites = (product: Product): void => {
    const favorites: Product[] = JSON.parse(localStorage.getItem('favoriteProducts') || '[]');

    const index: number = favorites.findIndex(item => item.id === product.id);
    if (index !== -1) {
      favorites.splice(index, 1);
    } else {
      favorites.unshift(product);
    }

    dispatch(toggleFavorite(product));
    localStorage.setItem('favoriteProducts', JSON.stringify(favorites));
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl h-15 overflow-hidden">{product.name}</CardTitle>
        <CardDescription className="overflow-hidden h-15">{product.shortDescription}</CardDescription>
        <CardAction>
          <Button variant='outline' className="border-red-500 text-red-500 hover:bg-red-100"
            onClick={() => {
              deleteOrSaveFavorites(product);

              const message = isFavorite ? 'bỏ' : '';
              toast(
                'Yêu thích', {
                description: `Bạn vừa ${message} yêu thích sản phẩm: ` + product.name,
                action: {
                  label: <X />,
                  onClick: () => { }
                }
              });
            }}
          >
            <Heart
              className={`w-5 h-5 text-red-500 ${isFavorite ? "fill-red-500" : ""}`}
            />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="relative h-50 w-full">
          <Image
            alt="product image"
            src={product.image}
            fill
            sizes="h-50 w-full"
            className="object-cover rounded"
            priority
          />
        </div>
        <p className="text-center text-antoree">
          {product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
        </p>
      </CardContent>
      <CardFooter >
        <ProductDetailModal product={product} />
      </CardFooter>
    </Card>
  )
}

export default ProductCard