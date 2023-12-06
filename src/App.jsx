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
      description: 'Simple and practical task list app made using flask.',
      link: 'http://verglass.eu.pythonanywhere.com',
      github: 'https://github.com/Verglass/TaskS',
    },
    {
      image: shop,
      title: 'Shop Mockup',
      description: 'A mock up of an online shop I made to practice building full stack applications. It uses React with Redux for the frontend, Express for the backend and MongoDB for the database.',
      link: '',
      github: 'https://github.com/Verglass/fd-project',
    },
    {
      image: tracker,
      title: 'Habit Tracker',
      description: 'A habit tacking app made in React. It connects to firebase for authentication and firestore for storing data.',
      link: 'https://verglass.github.io/habit-tracker/',
      github: 'https://github.com/Verglass/habit-tracker',
    },
  ]

  const slidesPL = [
    {
      image: tasklist,
      title: 'Lista zadań',
      description: 'Prosta i praktyczna aplikacja do zarządzania zadaniami napisana w flask.',
      link: 'http://verglass.eu.pythonanywhere.com',
      github: 'https://github.com/Verglass/TaskS',
    },
    {
      image: shop,
      title: 'Sklep Internetowy',
      description: 'Mockup sklepu internetowego napisany dla praktyki tworzenia aplikacji full stack. Wykorzystuje React z Reduxem do frontendu, Express do backendu i MongoDB do bazy danych.',
      link: '',
      github: 'https://github.com/Verglass/fd-project',
    },
    {
      image: tracker,
      title: 'Tracker nawyków',
      description: 'Aplikacja do śledzenia nawyków napisana w React. Łączy się z firebase do autoryzacji i firestore do przechowywania danych.',
      link: 'https://verglass.github.io/habit-tracker/',
      github: 'https://github.com/Verglass/habit-tracker',
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
    <div className='min-h-screen w-screen text-xl bg-zinc-900 text-zinc-200 flex flex-col justify-center items-center gap-4'>
      {
        lang === 'pl'
          ?
          <div className='w-1/2 text-3xl flex flex-col justify-start gap-1 p-2 shadow-md'>
            <h1 className='text-3xl'>Hej, nazywam się <span className='text-amber-600'>Wojtek Bebel.</span></h1>
            <h1 className='font-bold text-zinc-300'>Oto niektóre z moich aplikacji sieciowych:</h1>
          </div>
          :
          <div className='w-1/2 text-2xl flex flex-col justify-start gap-1 p-2 shadow-md'>
            <h1 className='text-3xl'>Hi, I'm <span className='text-amber-600'>Wojtek Bebel</span></h1>
            <h1 className='font-bold text-zinc-300'>Here are some of my web apps:</h1>
          </div>
      }
      <div className='bg-amber-700 py-10'>
        <div className='bg-zinc-900 max-w-[65%] rounded-md mx-auto shadow-md'>
          <Carousel>
            {slides.map(slide => (
              <div className='min-w-full pt-8 pb-10 px-20' key={slide.title}>
                <div className='text-zinc-900 bg-zinc-100 p-4 rounded flex flex-col justify-center items-center gap-4'>
                  <h1 className='text-3xl font-bold text-amber-600'>{slide.title}</h1>
                  <div>
                  <hr className='w-full rounded border-2 border-zinc-800 mb-4' />
                  <img src={slide.image} />
                  <hr className='w-full rounded border-2 border-zinc-800 mt-4' />
                  </div>
                  <div className='w-full flex justify-between gap-4'>
                    <p className='py-2'>{slide.description}</p>
                    {
                      lang === 'pl'
                        ?
                        <div className='self-start flex flex-col gap-4 text-white'>
                          {slide.link && <a className='text-center py-2 px-4 rounded-full bg-amber-600 hover:bg-amber-700 shadow-md' href={slide.link}>Strona</a>}
                          {slide.github && <a className='text-center py-2 px-4 rounded-full bg-amber-600 hover:bg-amber-700 shadow-md' href={slide.github}>Repozytorium</a>}
                        </div>
                        :
                        <div className='self-start flex flex-col gap-4 text-white'>
                          {slide.link && <a className='text-center py-2 px-4 rounded-full bg-amber-600 hover:bg-amber-700 shadow-md' href={slide.link}>Website</a>}
                          {slide.github && <a className='text-center py-2 px-4 rounded-full bg-amber-600 hover:bg-amber-700 shadow-md' href={slide.github}>Repository</a>}
                        </div>
                    }
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className='flex gap-4 pb-4 shadow-md'>
        <a className='bg-zinc-200 text-zinc-900 hover:text-zinc-600 rounded-full p-2' href='https://github.com/Verglass'>
          <GitHub size={40} />
        </a>
      </div>
    </div>
  )
}

export default App
