import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.scss'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import data from '../../../backend/data.json'
import cover from '../../assets/home-header.jpg'

/**
 * Render page Home
 *
 * @returns JSX.Element
 */
function Home(): JSX.Element {
  // Set title page on first load
  useEffect(() => {
    document.title = 'Accueil - Kasa'
  }, [])

  return (
    <section className={style.section}>
      <Banner height={223} mobileHeight={111} cover={cover}>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <div className={style.logements_wrapper}>
        {/* for each logement create Card wrapped with Link */}
        {data.map((logement) => (
          <Link
            key={`logement-${logement.id}`}
            to={`/logement/${logement.title}-${logement.id}`}
          >
            <Card title={logement.title} image={logement.cover} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Home
