import { useState, useEffect } from 'react'
import style from './style.module.scss'
import React from 'react'
import arrow_left from '../../assets/nav-arrow-left.svg'
import arrow_right from '../../assets/nav-arrow-right.svg'

type GalleryType = {
  album: Array<string>
}

/**
 * Gallery component
 *
 * @param album
 *
 * @returns JSX.Element
 */
function Gallery({ album }: GalleryType): JSX.Element {
  const [index, setIndex] = useState(0)
  /**
   * Change Index fuction
   *
   * @param index :int
   */
  const changeIndex = (index: number) =>
    index > album.length - 1 //if index > album length
      ? setIndex(0) // set index to 0
      : index < 0 // else if index < 0
      ? setIndex(album.length - 1) // set index with album.length
      : setIndex(index) // else set index with this index

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
      {/* if album length > 1 show button  */}
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
            {/* if album length > 1 show counter  */}
            {album.length > 1 && (
              <p>
                {index + 1} / {album.length}
              </p>
            )}
          </li>
        ))}
      </ul>
      {/* if album length > 1 show button  */}
      {album.length > 1 && (
        <button onClick={() => changeIndex(index + 1)}>
          <img src={arrow_right} alt="arrow_right" />
        </button>
      )}
    </div>
  )
}

export default Gallery
