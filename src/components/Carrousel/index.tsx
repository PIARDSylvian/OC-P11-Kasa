import { useState, useEffect } from 'react'
import style from './style.module.scss'
import React from 'react'

type CarrouselProps = {
  album: Array<string>
}

function Carrousel({ album }: CarrouselProps) {
  const [index, setIndex] = useState(0)
  const ChangeIndex = (index: number) =>
    index > album.length - 1
      ? setIndex(0)
      : index < 0
      ? setIndex(album.length - 1)
      : setIndex(index)

  useEffect(() => {
    const interval = setInterval(() => {
      ChangeIndex(index + 1)
    }, 3000)
    return () => {
      clearInterval(interval)
    }
  }, [index])
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == 'Tab' || event.key == 'Shift') return
    event.preventDefault()
    if (event.key == 'ArrowRight') ChangeIndex(index + 1)
    else if (event.key == 'ArrowLeft') ChangeIndex(index - 1)
  }
  return (
    <div className={style.carrousel} tabIndex={0} onKeyDown={handleKeyDown}>
      <button onClick={() => ChangeIndex(index - 1)}>{'<'}</button>
      <ul>
        {album.map((url, idx) => (
          <li
            key={`carrousel-${idx}`}
            className={`${style.carrouselItem} ${
              idx !== index && style.hidden
            }`}
          >
            <img src={url} alt={`carrousel-${idx}`} />
            <p>
              {index + 1} / {album.length}
            </p>
          </li>
        ))}
      </ul>
      <button onClick={() => ChangeIndex(index + 1)}>{'>'}</button>
    </div>
  )
}

export default Carrousel
