import { Product } from "@/types/product";

export function filterByName(products: Product[], name: string): Product[] {
  if (!name) return products;
  const lowerName = name.toLowerCase();
  return products.filter(p => p.name.toLowerCase().includes(lowerName));
}

const safeNumber = (value: string): number | null => {
  const n = Number(value.trim());
  return isNaN(n) ? null : n * 1000;
};

export function filterByPrice(products: Product[], priceStr: string): Product[] {
  if (!priceStr || priceStr.length <= 2) return products;

  if (priceStr.includes('lt')) {
    const numStr = priceStr.split('lt')[1];
    const price = safeNumber(numStr);
    return price !== null
      ? products.filter(p => p.price < price)
      : products;
  }

  if (priceStr.includes('gt')) {
    const numStr = priceStr.split('gt')[1];
    const price = safeNumber(numStr);
    return price !== null
      ? products.filter(p => p.price > price)
      : products;
  }

  if (priceStr.includes('to')) {
    const [minStr, maxStr] = priceStr.split('to');
    const min = safeNumber(minStr);
    const max = safeNumber(maxStr);
    if (min !== null && max !== null) {
      return products.filter(p => p.price >= min && p.price <= max);
    }
    return products;
  }

  return products;
}

