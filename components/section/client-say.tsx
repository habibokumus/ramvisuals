import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/~lib/utils'

import Client1 from '../../public/images/client.png'
import Paragraph from '../elements/Paragraph'
import { SaySvg } from '../svg'

export default function ClientSay() {
   const [activeTab, setActiveTab] = useState(2)
   return (
      <section className="flex flex-row items-center justify-between gap-16 px-[150px] py-[150px]">
         <div className="flex max-w-[441px] flex-col gap-4">
            <h2 className="text-[36px] font-semibold text-[#141516]">Monetize your way</h2>
            <Paragraph text="Set up subscriptions, rentals, or one-time buys for access to your VOD and live streams. Create exclusive experiences for your subscribers with coupons and promotions. One predictable fee, transparent pricing, and same-day setup." />
         </div>
         <div className="relative">
            {say.map((item) => {
               return (
                  item.index === activeTab && (
                     <div key={item.index} className="flex w-full flex-col rounded-[37px] bg-[#F7F9FA] px-10 py-14">
                        <SaySvg />
                        <Paragraph text={item.say} className=" border-b-2 py-4" />
                        <div className="flex flex-row items-center gap-4 pt-8">
                           <Image src={item.Image} width={90} height={90} alt="client1" className="rounded-full" />
                           <div className="flex max-w-[270px] flex-col">
                              <h3 className="text-[24px] font-semibold text-[#141516]">{item.name}</h3>
                              <p>{item.position}</p>
                           </div>
                        </div>
                     </div>
                  )
               )
            })}
            <div className="absolute -bottom-10 right-0 z-40 flex flex-row gap-2">
               {say.map((item) => {
                  return (
                     <button
                        key={item.index}
                        className={cn('h-3 w-3 rounded-full bg-[#141516]', activeTab === item.index && 'bg-[#006AFF]')}
                        onClick={() => setActiveTab(item.index)}
                     />
                  )
               })}
            </div>
         </div>
      </section>
   )
}

const say = [
   {
      index: 1,
      name: 'Habib Okumuş',
      position: 'Hizir Paket Co-founder & Chief Financial Officer (CFO)',
      say: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
      Image: Client1,
   },
   {
      index: 2,
      name: 'Habib Okumuş2',
      position: 'Hizir Paket Co-founder & Chief Financial Officer (CFO)',
      say: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
      Image: Client1,
   },
   {
      index: 3,
      name: 'Habib Okumuş3',
      position: 'Hizir Paket Co-founder & Chief Financial Officer (CFO)',
      say: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
      Image: Client1,
   },
   {
      index: 4,
      name: 'Habib Okumuş4',
      position: 'Hizir Paket Co-founder & Chief Financial Officer (CFO)',
      say: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
      Image: Client1,
   },
]
