import React from 'react'
import { cn } from '@/~lib/utils'

import Paragraph from './Paragraph'

export default function Button({ className }: { className?: string }) {
   return (
      <div
         className={cn('cursor-pointer rounded-[37px] bg-[#006AFF] px-[14px] py-[10px] hover:bg-opacity-80', className)}
      >
         <div className="w-[137px] text-center">
            <Paragraph text="İletişime Geç" className="text-white" />
         </div>
      </div>
   )
}
