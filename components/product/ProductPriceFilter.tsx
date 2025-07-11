import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const ProductPriceFilter = ({ setQueryByPrice }: { setQueryByPrice: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <div>
      <Select onValueChange={value => {
        if (value === '0') {
          value = ''
        }
        setQueryByPrice(value);
      }}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Lọc theo giá" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0">Mặc định</SelectItem>
          <SelectItem value="lt500">{'< 500K'}</SelectItem>
          <SelectItem value="500to1000">500K - 1 triệu</SelectItem>
          <SelectItem value="gt1000">{'> 1 triệu'}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default ProductPriceFilter