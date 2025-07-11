import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

type ProductNameFilterProps = {
  queryByName: string;
  setQueryByName: React.Dispatch<React.SetStateAction<string>>;
}

const ProductNameFilter = ({ queryByName, setQueryByName }: ProductNameFilterProps) => {
  return (
    <div className="flex w-full max-w-sm items-center gap-3">
      <Label htmlFor="email">Tên sản phẩm</Label>
      <Input type="text" placeholder="Nhập tên sản phẩm"
        value={queryByName}
        onChange={(e) => setQueryByName(e.target.value)}
        className="flex-1 h-10"
      />
    </div>
  )
}

export default ProductNameFilter