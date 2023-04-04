import { useState } from 'react'
import style from './style.module.scss'

type CollapseType = {
  collapseTitle: string
  collapseList: Array<string>
}

function Collapse({ collapseTitle, collapseList }: CollapseType) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        className={`${style.collapse_button} ${isOpen ? style.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {collapseTitle}
      </button>
      <ul className={`${style.collapse_content} ${isOpen ? style.open : ''}`}>
        {collapseList.map((element, idx) => (
          <li key={`${collapseTitle}-${idx}`}>{element}</li>
        ))}
      </ul>
    </>
  )
}

export default Collapse
