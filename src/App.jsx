import Carousel from './components/Carousel.jsx'
import tasklist from './assets/tasklist.png'
import tracker from './assets/tracker.png'
import shop from './assets/shop.png'
import { GitHub } from 'react-feather'
import { useState, useEffect } from 'react'

function App() {
  const slidesEN = [
    {
      image: tasklist,
      title: 'Tasklist',
      description: 'A simple tasklist app made using flask.',
      link: 'http://verglass.eu.pythonanywhere.com',
      github: 'https://github.com/Verglass/TaskS',
    },
    {
      image: shop,
      title: 'Tasklist2',
      description: 'A simple tasklist app made using flask.',
      link: 'http://verglass.eu.pythonanywhere.com',
      github: 'https://github.com/Verglass/TaskS',
    },
    {
      image: tracker,
      title: 'Tasklist3',
      description: 'A simple tasklist app made using flask.',
      link: 'http://verglass.eu.pythonanywhere.com',
      github: 'https://github.com/Verglass/TaskS',
    },
  ]

  const slidesPL = [
    {
      image: tasklist,
      title: 'TasklistPL',
      description: 'A simple tasklist app made using flask.',
      link: 'http://verglass.eu.pythonanywhere.com',
      github: 'https://github.com/Verglass/TaskS',
    },
    {
      image: shop,
      title: 'Tasklist2',
      description: 'A simple tasklist app made using flask.',
      link: 'http://verglass.eu.pythonanywhere.com',
      github: 'https://github.com/Verglass/TaskS',
    },
    {
      image: tracker,
      title: 'Tasklist3',
      description: 'A simple tasklist app made using flask.',
      link: 'http://verglass.eu.pythonanywhere.com',
      github: 'https://github.com/Verglass/TaskS',
    },
  ]

  const params = new URLSearchParams(window.location.search)

  const [slides, setSlides] = useState(slidesEN)
  const [lang, setLang] = useState('en')

  useEffect(() => {
    params.get('lang') === 'pl' && setLang('pl')
  }, [])

  useEffect(() => {
    lang === 'pl' ? setSlides(slidesPL) : setSlides(slidesEN)
  }, [lang])

  return (
    <div className='text-lg text-zinc-100 flex flex-col justify-center items-center gap-4'>
      {
        lang === 'pl'
          ?
          <div className='w-1/2 text-3xl flex flex-col justify-start gap-1 p-2'>
            <h1>Hj, I'm Wojtek Bebel.</h1>
            <h1>Here is some of my work:</h1>
          </div>
          :
          <div className='w-1/2 text-3xl flex flex-col justify-start gap-1 p-2'>
            <h1>Hi, I'm Wojtek Bebel.</h1>
            <h1>Here is some of my work:</h1>
          </div>
      }
      <div className='bg-zinc-600 py-10'>
        <div className='bg-zinc-900 max-w-[50%] rounded-md mx-auto'>
          <Carousel>
            {slides.map(slide => (
              <div className='min-w-full flex flex-col justify-center items-center gap-4 py-6 px-20' key={slide.title}>
                <h1 className='text-3xl'>{slide.title}</h1>
                <img src={slide.image} />
                <p>{slide.description}</p>
                <div className='self-start flex flex-col gap-2'>
                  <a className='hover:text-zinc-300' href={slide.link}>Website</a>
                  <a className='hover:text-zinc-300' href={slide.github}>Repository</a>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className='flex gap-4'>
        <div className='bg-zinc-200 text-zinc-900 rounded-full p-2' >
          <a href='https://github.com/Verglass'><GitHub size={40} /></a>
        </div>
      </div>
    </div>
  )
}

export default App
