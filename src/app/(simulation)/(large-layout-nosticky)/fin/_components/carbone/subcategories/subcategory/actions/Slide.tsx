import Card from './Card'
import { twMerge } from 'tailwind-merge'

type SlideProps = {
  text: string,
  className?: string
}

export default function Slide({ text, className }: SlideProps) {
  return (
    <Card
      title={text}
      className={twMerge(
        "min-h-[150px] min-w-[30%] border-categories-divers bg-divers-200 ml-4",
        className
      )}
    />
  )
}
