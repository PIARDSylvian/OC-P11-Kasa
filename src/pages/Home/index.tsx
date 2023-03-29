import style from './style.module.scss'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import data from '../../../backend/data.json'
import cover from '../../assets/home-header.jpg'

function Home() {
  return (
    <section>
      <Banner height={223} mobileHeight={111} cover={cover}>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <div className={style.logements_wrapper}>
        {data.map((logement) => (
          <Card
            key={`logement-${logement.id}`}
            title={logement.title}
            image={logement.cover}
          />
        ))}
      </div>
    </section>
  )
}

export default Home
