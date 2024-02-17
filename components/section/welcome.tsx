import React from 'react'
import Image from 'next/image'
import { IconArrowMoveDown } from '@tabler/icons-react'

import Png from '../../public/images/welcome1.png'
import Paragraph from '../elements/Paragraph'

export default function Welcome() {
   return (
      <section className="relative z-30 flex h-full min-h-screen flex-row items-center justify-between bg-[#141516] px-[150px]">
         <div className="flex max-w-[489px] flex-col gap-[17px]">
            <h1 className="text-[49px] font-bold text-white">Reach more people in real time</h1>
            <Paragraph
               className="font-thin text-white"
               text="The Screeno ecosystem is designed to help you generate profit. Set up complete sales and marketing funnels with ease using the Screeno"
            />
         </div>
         <div>
            <Image
               src={Png}
               width={566}
               height={396}
               alt=""
               quality={100}
               className="transition duration-200 ease-in-out hover:scale-105"
            />
         </div>
         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white">
            <IconArrowMoveDown />
         </div>
      </section>
   )
}
