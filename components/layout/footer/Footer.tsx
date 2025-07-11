import React from 'react'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <Image width={50} height={50} src="https://yt3.googleusercontent.com/ytc/AIdro_keFjtiXZuYajP4MhF_vt1imKmL_Xi3INzEMjpbNQo4OOU=s900-c-k-c0x00ffffff-no-rj" alt="Antoree Logo" />
          </Avatar>
          <span className="font-bold text-lg">Antoree HoofKhanh</span>
        </div>
        <Separator className="my-2 md:hidden" />
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Button variant="link" asChild>
            <Link href="/">Trang chủ</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/about">Giới thiệu</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/contact">Liên hệ</Link>
          </Button>
        </div>
        <Separator className="my-2 md:hidden" />
        <div className="text-xs text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} Antoree HoofKhanh. All rights reserved.<br />
          Email: hoofkhanh@antoree.com
        </div>
      </div>
    </footer>
  )
}

export default Footer