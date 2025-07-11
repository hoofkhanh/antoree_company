'use client';

import React, { useEffect } from 'react'
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { Product } from '@/types/product';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/lib/store';
import { setFavorites } from '@/lib/features/favoriteSlices';
import { setHishories } from '@/lib/features/historySlices';

const Header: React.FC = () => {
  const favorites: Product[] = useSelector((state: RootState) => state.favoriteReducer.favoriteProducts);
  const histories: Product[] = useSelector((state: RootState) => state.historyReducer.historyProducts);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const favorites: Product[] = JSON.parse(localStorage.getItem('favoriteProducts') || '[]');
    dispatch(setFavorites(favorites));
  }, [dispatch]);

  useEffect(() => {
    const histories: Product[] = JSON.parse(localStorage.getItem('historyProducts') || '[]');
    dispatch(setHishories(histories));
  }, [dispatch]);

  return (
    <header className="p-4 w-full border-b shadow-sm bg-antoree font-bold text-2xl text-white">
      <div className='flex items-center justify-between w-full gap-5'>
        <Logo />

        <div className="hidden md:block w-full ">
          <DesktopNav totalFavorites={favorites.length} totalHistories={histories.length} />
        </div>

        <div className='block md:hidden'>
          <MobileNav totalFavorites={favorites.length} totalHistories={histories.length} />
        </div>
      </div>
    </header>
  )
}

export default Header