import React from 'react'

export default function Footer() {
  return (
    <div className='border-t p-5 flex justify-between items-center'>
        <p className='text-[12px] text-muted-foreground'>© 2023 Lương Khoa. All rights reserved.</p>
        <div className='flex gap-4 text-[12px] text-muted-foreground'>
            <a href="/" className='hover:underline transition-all'>Contact</a>
            <a href="https://www.termsfeed.com/live/8be560f6-4487-4829-9dfd-ff4a94589225" className='hover:underline transition-all'>Terms and Service</a>
            <a href="https://www.termsfeed.com/live/87149a5a-6182-4acd-8a65-24d2a02ad3d1" className='hover:underline transition-all'>Privacy Policy</a>
        </div>
    </div>
  )
}
