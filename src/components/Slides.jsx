import { useState } from 'react'

const Slides = () => {
    const [slides, setSlides] = useState([
        {},
        {},
        {},
        {},
    ])

    return (
        <ul className='slides'>
            {slides.map(slide => (
                <div className='slide'></div>
            ))}
        </ul>
    )
}

export default Slides