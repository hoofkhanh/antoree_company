'use client'

import { Button } from '@/components/ui/button';
import { SheetDescription } from '@/components/ui/sheet';
import Link from 'next/link';
import React from 'react'

type MobileNavItemProps = {
  title: string
  href: string;
  total?: number;
};

const MobileNavItem = ({ title, href, total }: MobileNavItemProps) => {
  return (
    <SheetDescription asChild>
      <div>
        <Button className="w-full" asChild>
          <Link href={href}>{title} {typeof total === 'number' ? `: ${total}` : ''}</Link>
        </Button>
      </div>
    </SheetDescription>
  )
}

export default MobileNavItem