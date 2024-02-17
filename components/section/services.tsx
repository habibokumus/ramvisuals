import React from 'react'
import { IconUpload } from '@tabler/icons-react'

import Paragraph from '../elements/Paragraph'
import Custom_h1 from '../elements/custom-h1'

export default function Services() {
   return (
      <section className="relative z-30 h-full px-[150px]">
         <div className="h-[107px]" />
         <div className="mx-auto w-full max-w-[498px]">
            <Custom_h1 text="All-in-one platform" className="text-center" />
            <Paragraph
               text="You take care of the video quality and we take care of everything else"
               className="text-center"
            />
         </div>
         <div className="grid grid-cols-3 gap-[115px] pt-[50px]">
            {Content.map((item, idx) => {
               return (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={idx} className="col-span-1 flex flex-col gap-4">
                     <div className="flex flex-row items-center gap-3">
                        {item.icon}
                        <span className="text-[18px] font-semibold">{item.title}</span>
                     </div>
                     <Paragraph text={item.description} />
                  </div>
               )
            })}
         </div>
         <div className="h-[107px]" />
      </section>
   )
}

const Content = [
   {
      icon: <IconUpload className="text-[#006AFF]" />,
      title: 'Upload & Organize',
      description: 'Upload in bulk, organize content in categories, add custom filters & upload extras.',
   },
   {
      icon: <IconUpload className="text-[#006AFF]" />,
      title: 'Upload & Organize',
      description: 'Upload in bulk, organize content in categories, add custom filters & upload extras.',
   },
   {
      icon: <IconUpload className="text-[#006AFF]" />,
      title: 'Upload & Organize',
      description: 'Upload in bulk, organize content in categories, add custom filters & upload extras.',
   },
   {
      icon: <IconUpload className="text-[#006AFF]" />,
      title: 'Upload & Organize',
      description: 'Upload in bulk, organize content in categories, add custom filters & upload extras.',
   },
   {
      icon: <IconUpload className="text-[#006AFF]" />,
      title: 'Upload & Organize',
      description: 'Upload in bulk, organize content in categories, add custom filters & upload extras.',
   },
   {
      icon: <IconUpload className="text-[#006AFF]" />,
      title: 'Upload & Organize',
      description: 'Upload in bulk, organize content in categories, add custom filters & upload extras.',
   },
]
