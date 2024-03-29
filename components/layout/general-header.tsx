import React from 'react'
import Link from 'next/link'
import { useLocalStorage } from 'oceaners-hooks'

import Button from '../elements/button'
import Paragraph from '../elements/paragraph-p1'
import { SvgLogo } from '../svg'

export default function GeneralHeader() {
   // const { setValue: setSiteLocalization } = useLocalStorage('localization', 'tr')
   // function ChangesLanguage(value) {
   //    console.log('value', value)
   //    setSiteLocalization(value)
   //    // reload page
   //    window.location.reload()
   // }
   return (
      <header className="fixed z-50 flex w-full flex-row items-center justify-center bg-[#141516]  bg-opacity-70 px-[150px] py-6 text-white backdrop-blur-2xl lg:justify-between">
         <nav className="flex flex-row items-center justify-center ">
            <SvgLogo />
            {/* <div className="flex flex-row items-center gap-[77px] pl-[100px]">
               <Link href="/">
                  <Paragraph text="Hizmetler" />
               </Link>
               <Link href="/">
                  <Paragraph text="Protfolio" />
               </Link>
               <Link href="/">
                  <Paragraph text="Biz Kimiz" />
               </Link>
            </div> */}
         </nav>

         <Button className="hidden lg:flex" />
      </header>
   )
}
