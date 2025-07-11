import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="https://yt3.googleusercontent.com/ytc/AIdro_keFjtiXZuYajP4MhF_vt1imKmL_Xi3INzEMjpbNQo4OOU=s900-c-k-c0x00ffffff-no-rj"
        width={120}
        height={100}
        alt="Logo"
        className="rounded-lg"
        priority
      />
    </Link>
  )
}

export default Logo