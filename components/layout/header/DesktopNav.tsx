'use client'

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import DesktopNavItem from "./DesktopNavItem";

const DesktopNav = ({ totalFavorites, totalHistories }: { totalFavorites: number, totalHistories: number }) => {

  return (
    <NavigationMenu>
      <NavigationMenuList className="items-center h-10">
        <DesktopNavItem title='Danh sách sản phẩm' href='/' />
        <Separator orientation="vertical" className="mx-5" />
        <DesktopNavItem title='Danh sách yêu thích' href='/favorites' total={totalFavorites} />
        <Separator orientation="vertical" className="mx-5" />
        <DesktopNavItem title='Lịch sử xem' href='/histories' total={totalHistories} />
        <Separator orientation="vertical" className="mx-5" />
        <DesktopNavItem title='Gợi ý sản phẩm phù hợp' href='/suggestions' />
      </NavigationMenuList>
    </NavigationMenu >
  )
}

export default DesktopNav