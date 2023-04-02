import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import Carrousel from '../../components/Carrousel'
import style from './style.module.scss'
import Rating from '../../components/Rating'
import Tags from '../../components/Tags'

type loader = {
  cover: string
  description: string
  equipments: Array<string>
  host: {
    name: string
    picture: string
  }
  id: string
  location: string
  pictures: Array<string>
  rating: string
  tags: Array<string>
  title: string
}

function Logement() {
  const loader = useLoaderData() as loader
  console.log(loader)
  useEffect(() => {
    document.title = `${loader.title} - Kasa`
  }, [])

  return (
    <section className={style.section}>
      <Carrousel album={loader.pictures} />
      <header>
        <div>
          <h1>{loader.title}</h1>
          <p>{loader.location}</p>
          <Tags tags={loader.tags} />
        </div>
        <div className={style.header__right}>
          <div className={style.header__right__host}>
            {loader.host.name.split(/\s+/g).map((elem) => (
              <p key={elem}>{elem}</p>
            ))}
          </div>
          <img src={loader.host.picture} alt="host picture" />
          <Rating rate={Number(loader.rating)} />
        </div>
      </header>
    </section>
  )
}

export default Logement
