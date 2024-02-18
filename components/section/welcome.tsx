import React, { useState } from 'react'
import Image from 'next/image'
import { IconArrowMoveDown } from '@tabler/icons-react'

import Png from '../../public/images/welcome1.png'
import Paragraph from '../elements/paragraph-p1'
import Popup from '../elements/popup'

export default function Welcome() {
   const [open, setOpen] = useState<boolean>(false)
   return (
      <>
         <section className="relative z-30 flex h-full min-h-screen flex-row items-center justify-between bg-[#141516] px-[150px]">
            <div className="flex max-w-[489px] flex-col gap-[17px]">
               <h1 className="text-[49px] font-bold text-white">{Content[0].title}</h1>
               <Paragraph className="font-thin text-white" text={Content[0].subtitle} />
            </div>
            <div onClick={() => setOpen(!open)}>
               <Image
                  src={Content[0].image}
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
         <Popup setOpen={setOpen} url="https://www.youtube.com/embed/e_oylI6fppA?si=MLI6vwR81CmZTDEU" open={open} />
      </>
   )
}

const Content = [
   {
      title: 'Kağıda Dökülen Düşüncelere',
      subtitle:
         'Eğitimli gözlerin ve ellerin ustalığıyla birleştiğinde, adeta sanatın kendisiyle buluşturuyoruz. Her ışığın, her sesin altında yatan derinlik, hayal gücünün ve becerinin bir ürünü olarak ortaya çıkarmak için bekliyoruz.',
      image: Png,
   },
]
