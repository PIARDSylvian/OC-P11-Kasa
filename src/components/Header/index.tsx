import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/kasa-logo.png'
import styled from 'styled-components'
import style from './style.module.scss'

const StyledNavLink = styled(NavLink)`
  &.active {
    text-decoration: underline;
  }
`

function Header() {
  return (
    <header className={style.header}>
      <Link to="/">
        <img src={logo} className={style.logo} alt="kasa logo" />
      </Link>
      <nav>
        <ul className={style.nav_list}>
          <li>
            <StyledNavLink to="/">Accueil</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/a-propos">A propos</StyledNavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
