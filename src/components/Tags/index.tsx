import style from './style.module.scss'

type TagsType = {
  tags: Array<string>
}

/**
 * Tags component
 *
 * @param tags // list of tag
 *
 * @returns JSX.Element
 */
function Tags({ tags }: TagsType): JSX.Element {
  return (
    <div className={style.tags__wrapper}>
      {tags.map((tag, idx) => (
        <p key={`tag-${idx}`}>{tag}</p>
      ))}
    </div>
  )
}

export default Tags
