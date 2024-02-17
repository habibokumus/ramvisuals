import React from 'react'
import { cn } from '@/~lib/utils'

export default function Custom_h1({ className, text }: { className?: string; text: string }) {
   return <h1 className={cn('text-[49px] font-bold ', className)}>{text}</h1>
}
