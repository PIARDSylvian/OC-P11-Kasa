import { ReactNode } from 'react'
import style from './style.module.scss'
import styled from 'styled-components'

type BannerType = {
  height: number
  mobileHeight: number
  cover: string
  children?: ReactNode //not required property
}

type StyleType = {
  url: string
  desktop: number
  mobile: number
}

const Header = styled.header`
  background: no-repeat url(${(props: StyleType) => props.url}) center/cover;
  height: ${(props: StyleType) => props.desktop}px;
  @media screen and (max-width: 800px) {
    height: ${(props: StyleType) => props.mobile}px;
  }
`

/**
 * Banner components
 *
 * @param height // height in desktop
 * @param mobileHeight // height in mobile
 * @param cover // background image
 * @param children // Content
 *
 * @returns JSX.Element
 */
function Banner({
  height,
  mobileHeight,
  cover,
  children,
}: BannerType): JSX.Element {
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
