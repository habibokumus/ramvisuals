import React from 'react'
import { useClickOutside } from 'oceaners-hooks'

export default function Popup({ setOpen, url, open }: PopupProps) {
   const ref = useClickOutside<HTMLDivElement>(() => setOpen(false))

   return open ? (
      <div className="min-w-screen fixed left-0 top-0 z-[100] min-h-screen w-full bg-white bg-opacity-80">
         <div
            ref={ref}
            className="absolute left-1/2 top-1/2 h-[200px] w-[350px] -translate-x-1/2 -translate-y-1/2 md:h-[400px] md:w-[700px]"
         >
            <iframe
               width="100%"
               height="400"
               src={url}
               title="YouTube video player"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
         </div>
      </div>
   ) : null
}

interface PopupProps {
   setOpen: React.Dispatch<React.SetStateAction<boolean>>
   url: string
   open: boolean
}
