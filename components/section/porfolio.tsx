import React from 'react'
import Image from 'next/image'

import Png1 from '../../public/images/welcome2.png'
import Png2 from '../../public/images/welcome3.png'
import Png4 from '../../public/images/welcome4.png'
import Paragraph from '../elements/Paragraph'
import Button from '../elements/button'
import Custom_h1 from '../elements/custom-h1'

export default function Porfolio() {
   return (
      <section className="h-full bg-[#141516]">
         <Custom_h1 text="We help you grow" className="py-20 text-center text-white" />
         <div className="flex flex-col px-[150px]">
            <div className="flex flex-row items-center justify-between">
               <div className="flex max-w-[441px] flex-col gap-6">
                  <h2 className="text-[36px] font-semibold text-white">Monetize your way</h2>
                  <Paragraph
                     text="Set up subscriptions, rentals, or one-time buys for access to your VOD and live streams. Create exclusive experiences for your subscribers with coupons and promotions. One predictable fee, transparent pricing, and same-day setup."
                     className="text-white"
                  />
               </div>
               <Image
                  src={Png1}
                  width={604}
                  height={409}
                  alt="image"
                  className="transition duration-200 ease-in-out hover:scale-105"
               />
            </div>
            <div className="h-[210px]" />
            <div className="flex flex-row items-center justify-between">
               <Image
                  src={Png2}
                  width={570}
                  height={399}
                  alt="image"
                  className="transition duration-200 ease-in-out hover:scale-105"
               />
               <div className="flex max-w-[441px] flex-col gap-6">
                  <h2 className="text-[36px] font-semibold text-white">Monetize your way</h2>
                  <Paragraph
                     text="Set up subscriptions, rentals, or one-time buys for access to your VOD and live streams. Create exclusive experiences for your subscribers with coupons and promotions. One predictable fee, transparent pricing, and same-day setup."
                     className="text-white"
                  />
               </div>
            </div>
            <div className="h-[210px]" />
            <Custom_h1 text="Start your own business today" className="text-center text-white" />
            <Paragraph
               text="Consistent quality and experience across all platforms and devices."
               className="pb-6 text-center text-white"
            />
            <Button className="mx-auto" />
            <div className="h-[60px]" />
            <Image
               src={Png4}
               width={809}
               height={576}
               alt="image"
               className="mx-auto transition duration-200 ease-in-out hover:scale-105"
            />
         </div>
         <div className="h-[110px]" />
      </section>
   )
}
