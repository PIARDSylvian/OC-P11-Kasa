import { ReactNode } from 'react'
import style from './style.module.scss'
import styled from 'styled-components'

type BannerProps = {
  height: number
  mobileHeight: number
  cover: string
  children: ReactNode
}

type style = {
  url: string
  desktop: number
  mobile: number
}

const Header = styled.header`
  background: no-repeat url(${(props: style) => props.url}) center/cover;
  height: ${(props: style) => props.desktop}px;
  @media screen and (max-width: 800px) {
    height: ${(props: style) => props.mobile}px;
  }
`

function Banner({ height, mobileHeight, cover, children }: BannerProps) {
  return (
    <Header
      className={style.header}
      desktop={height}
      mobile={mobileHeight}
      url={cover}
    >
      {children}
    </Header>
  )
}

export default Banner
