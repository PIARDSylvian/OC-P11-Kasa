import style from './style.module.scss'

type tags = {
  tags: Array<string>
}

function Tags({ tags }: tags) {
  return (
    <div className={style.tags__wrapper}>
      {tags.map((tag, idx) => (
        <p key={`tag-${idx}`}>{tag}</p>
      ))}
    </div>
  )
}

export default Tags
