import logo from '../../assets/kasa-logo.png'
import style from './style.module.scss'

/**
 * Footer Component
 *
 * @returns JSX.Element
 */
function Footer(): JSX.Element {
  return (
    <footer className={style.footer}>
      <img src={logo} className={style.logo} alt="kasa logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
