import style from './style.module.scss'

type TagsType = {
  tags: Array<string>
}

function Tags({ tags }: TagsType) {
  return (
    <div className={style.tags__wrapper}>
      {tags.map((tag, idx) => (
        <p key={`tag-${idx}`}>{tag}</p>
      ))}
    </div>
  )
}

export default Tags
