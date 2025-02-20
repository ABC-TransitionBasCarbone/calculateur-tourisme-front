import { twMerge } from 'tailwind-merge'

type SlideProps = {
  text: string,
  className?: string
}

export default function Slide({ text, className }: SlideProps) {
  return (
    <div
      className={twMerge(
        'min-h-[150px] min-w-[30%]',
        'flex flex-col justify-between rounded-xl border-2 px-3 pb-4 pt-6',
        'border-categories-divers bg-divers-200',
        'ml-4',
        className
      )}
    >
      <div className="mb-4">
        <div className="text-center text-sm font-bold leading-tight">
          {text}
        </div>
      </div>
    </div>
  )
}
