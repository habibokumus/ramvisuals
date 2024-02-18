import React from 'react'
import {
   IconBrandFacebook,
   IconBrandInstagram,
   IconBrandYoutube,
   IconLocation,
   IconMail,
   IconPhoneCall,
} from '@tabler/icons-react'

import Paragraph from '../elements/paragraph-p1'
import { SvgLogoBlack } from '../svg'

export default function GeneralFooter() {
   return (
      <footer className="grid grid-cols-6 gap-6 bg-[#F7F9FA] px-[150px] pt-[82px]">
         <div className="col-span-2 flex flex-col gap-4">
            <SvgLogoBlack />
            <Paragraph text="Streaming and Video platform  Video platform Video platform Video platform " />
            <div className="flex flex-row items-center gap-2 text-[#006AFF]">
               <IconBrandFacebook />
               <IconBrandInstagram />
               <IconBrandYoutube />
            </div>
         </div>
         <div className="col-span-2">
            <h3 className="text-[18px] font-semibold text-[#141516]">Contact info</h3>
            <div className="flex flex-row items-start gap-2 pt-4">
               <IconLocation className="text-[#006AFF]" />
               <Paragraph text="Reşadiye Mah. Saraç Sokak Rize/Merkez" />
            </div>
            <div className="flex flex-row items-center gap-2 py-2">
               <IconPhoneCall className="text-[#006AFF]" />
               <Paragraph text="(219) 555-0114" />
            </div>
            <div className="flex flex-row items-center  gap-2 ">
               <IconMail className="text-[#006AFF]" />
               <Paragraph text="(219) 555-0114" />
            </div>
         </div>
         <div className="col-span-6  border-t py-4">
            <Paragraph className="text-center" text="© 2024 All rights reserved" />
         </div>
      </footer>
   )
}
