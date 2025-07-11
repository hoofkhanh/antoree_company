'use client'

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MobileNavItem from "./MobileNavItem";

const MobileNav = ({ totalFavorites, totalHistories }: { totalFavorites: number, totalHistories: number }) => {
  // useEffect(() => {
  //   throw new Error("Lỗi thử nghiệm trong client component!");
  // })

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="!text-white cursor-pointer">Xem Menu</Button>
      </SheetTrigger>
      <SheetContent className="bg-antoree">
        <SheetHeader>
          <SheetTitle className="!text-white">Menu</SheetTitle>
          <Separator className="mb-5" />
          <MobileNavItem title='Danh sách sản phẩm' href='/' />
          <Separator className="my-2" />
          <MobileNavItem title='Danh sách yêu thích' href='/favorites' total={totalFavorites} />
          <Separator className="my-2" />
          <MobileNavItem title='Lịch sử xem' href='/histories' total={totalHistories} />
          <Separator className="my-2" />
          <MobileNavItem title='Gợi ý sản phẩm phù hợp' href='/suggestions' />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav