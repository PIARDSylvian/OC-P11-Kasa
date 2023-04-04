import style from './style.module.scss'
import styled from 'styled-components'

type LogementType = {
  title: string
  image: string
}

type CoverType = {
  url: string
}

const Article = styled.article`
  background: no-repeat url(${(props: CoverType) => props.url}) center/cover;
`

function Card({ title, image }: LogementType) {
  return (
    <Article className={style.logement} url={image}>
      <h1>{title}</h1>
    </Article>
  )
}

export default Card
