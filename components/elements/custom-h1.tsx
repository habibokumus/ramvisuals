import React from 'react'
import { cn } from '@/~lib/utils'

export default function Custom_h1({ className, text }: { className?: string; text: string }) {
   return <h1 className={cn('text-3xl font-bold lg:text-5xl ', className)}>{text}</h1>
}
