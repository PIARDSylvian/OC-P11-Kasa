import style from './style.module.scss'
import styled from 'styled-components'

type logementProps = {
  title: string
  image: string
}

type cover = {
  url: string
}

const Article = styled.article`
  background: no-repeat url(${(props: cover) => props.url}) center/cover;
`

function Card({ title, image }: logementProps) {
  return (
    <Article className={style.logement} url={image}>
      <h1>{title}</h1>
    </Article>
  )
}

export default Card
