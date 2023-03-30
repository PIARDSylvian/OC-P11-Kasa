import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import style from './style.module.scss'

function Error() {
  useEffect(() => {
    document.title = '404 Error - Kasa'
  }, [])

  return (
    <section className={style.section}>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </section>
  )
}

export default Error
