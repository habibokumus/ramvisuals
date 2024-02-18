import React, { useState } from 'react'
import { Montserrat } from 'next/font/google'

import GeneralFooter from './general-footer'
import GeneralHeader from './general-header'

const montserrat = Montserrat({
   weight: ['400', '500', '600', '700', '800'],
   style: ['normal'],
   subsets: ['latin'],
   display: 'swap',
})
export default function Layout({ children }: { children: React.ReactNode }) {
   return (
      <div className="relative mx-auto max-w-[1440px]">
         <GeneralHeader />
         <main className={montserrat.className}>{children}</main>
         <GeneralFooter />
      </div>
   )
}
