import style from './style.module.scss'

type CollapseProps = {
  collapseTitle: string
  collapseList: Array<string>
}

function Collapse({ collapseTitle, collapseList }: CollapseProps) {
  return (
    <>
      <button className={style.button}>{collapseTitle}</button>
      <ul>
        {collapseList.map((element, idx) => (
          <li key={`${collapseTitle}-${idx}`}>{element}</li>
        ))}
      </ul>
    </>
  )
}

export default Collapse
