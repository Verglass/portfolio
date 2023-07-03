import { useState } from 'react'
import { ChevronLeft } from 'react-feather'
import { ChevronRight } from 'react-feather'
import { useSwipeable } from 'react-swipeable'

const Carousel = ({ children: slides }) => {
    const [index, setIndex] = useState(0)

    const next = () => {
        setIndex((index + 1) % slides.length)
    }

    const prev = () => {
        setIndex((index - 1 + slides.length) % slides.length)
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => index !== slides.length - 1 && setIndex(index + 1),
        onSwipedRight: () => index !== 0 && setIndex(index - 1),
    })

    return (
        <div className='overflow-hidden relative' {...handlers}>
            <div
                className='flex transition-transform ease-out duration-500'
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {slides}
            </div>
            <div className='absolute inset-0 flex items-center justify-between p-4 invisible'>
                <button className='p-1 rounded-full shadow bg-zinc-700/70 hover:bg-zinc-600/70 visible' onClick={prev}>
                    <ChevronLeft size={40} />
                </button>
                <button className='p-1 rounded-full shadow bg-zinc-700/70 hover:bg-zinc-600/70 visible' onClick={next}>
                    <ChevronRight size={40} />
                </button>
            </div>
            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-200 ${i === index ? 'p-2 bg-zinc-100' : 'bg-zinc-100/80 hover:bg-zinc-100'}`}
                            onClick={() => setIndex(i)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel