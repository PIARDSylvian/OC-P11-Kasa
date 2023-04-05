import { useState, useEffect } from 'react'
import style from './style.module.scss'
import React from 'react'
import arrow_left from '../../assets/nav-arrow-left.svg'
import arrow_right from '../../assets/nav-arrow-right.svg'

type GalleryType = {
  album: Array<string>
}

function Gallery({ album }: GalleryType) {
  const [index, setIndex] = useState(0)
  const changeIndex = (index: number) =>
    index > album.length - 1
      ? setIndex(0)
      : index < 0
      ? setIndex(album.length - 1)
      : setIndex(index)

  useEffect(() => {
    const interval = setInterval(() => {
      changeIndex(index + 1)
    }, 3000)
    return () => {
      clearInterval(interval)
    }
  }, [index])
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == 'Tab' || event.key == 'Shift') return
    event.preventDefault()
    if (event.key == 'ArrowRight') changeIndex(index + 1)
    else if (event.key == 'ArrowLeft') changeIndex(index - 1)
  }
  return (
    <div className={style.carrousel} tabIndex={0} onKeyDown={handleKeyDown}>
      {album.length > 1 && (
        <button onClick={() => changeIndex(index - 1)}>
          <img src={arrow_left} alt="arrow_left" />
        </button>
      )}
      <ul>
        {album.map((url, idx) => (
          <li
            key={`carrousel-${idx}`}
            className={`${style.carrouselItem} ${
              idx !== index && style.hidden
            }`}
          >
            <img src={url} alt={`carrousel-${idx}`} />
            {album.length > 1 && (
              <p>
                {index + 1} / {album.length}
              </p>
            )}
          </li>
        ))}
      </ul>
      {album.length > 1 && (
        <button onClick={() => changeIndex(index + 1)}>
          <img src={arrow_right} alt="arrow_right" />
        </button>
      )}
    </div>
  )
}

export default Gallery
