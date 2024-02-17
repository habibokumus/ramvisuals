import React from 'react'
import { cn } from '@/~lib/utils'

export default function Paragraph({ text, className }: { text: string; className?: string }) {
   return <div className={cn('text-base font-light leading-8', className)}>{text}</div>
}
