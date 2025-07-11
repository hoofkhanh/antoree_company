'use client'

import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import Link from 'next/link';
import React from 'react'

type DesktopNavItemProps = {
  title: string
  href: string;
  total?: number;
};

const DesktopNavItem = ({ title, href, total }: DesktopNavItemProps) => {
  return (
    <NavigationMenuLink asChild>
      <Link href={href} className="bg-black">{title} {typeof total === 'number' ? `: ${total}` : ''}</Link>
    </NavigationMenuLink>
  )
}

export default DesktopNavItem