import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/kasa-logo.png'

import style from './style.module.scss'
import './style.scss'

function Header() {
  return (
    <header className={style.header}>
      <Link to="/">
        <img src={logo} className={style.logo} alt="kasa logo" />
      </Link>
      <nav>
        <ul className={style.nav_list}>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/a-propos">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
