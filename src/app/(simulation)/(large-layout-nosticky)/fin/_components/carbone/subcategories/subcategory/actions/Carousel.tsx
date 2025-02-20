'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useCallback, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Slide
  from '@/app/(simulation)/(large-layout-nosticky)/fin/_components/carbone/subcategories/subcategory/actions/Slide'

type Props = {
  slides: { text: string; className?: string }[]
}

export default function Carousel({ slides }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect, slides.length])

  return (
    <div>
      <div className="relative overflow-hidden w-full p-4" ref={emblaRef}>
        <div className="flex flew-nowrap">
          {slides.map((slide, index) => (
            <Slide key={index} text={slide.text} className={slide.className} />
          ))}
        </div>
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-primary-700 bg-opacity-70 p-3 text-white border-2 border-primary-700 shadow-sm hover:bg-primary-900 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-primary-700 bg-opacity-70 p-3 text-white border-2 border-primary-700 shadow-sm hover:bg-primary-900 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="flex">
        <div className="ml-auto flex justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              className={twMerge(
                'h-3 w-3 rounded-full',
                selectedIndex === index ? 'bg-primary-900' : 'bg-gray-300'
              )}
            />
          ))}
        </div>
      </div>
    </div>)
}
