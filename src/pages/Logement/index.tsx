import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import Carrousel from '../../components/Carrousel'

type loader = {
  cover: string
  description: string
  equipments: Array<string>
  host: object
  id: string
  location: string
  pictures: Array<string>
  rating: string
  tags: string
  title: string
}

function Logement() {
  const loader = useLoaderData() as loader
  useEffect(() => {
    document.title = `${loader.title} - Kasa`
  }, [])

  return (
    <>
      <Carrousel album={loader.pictures} />
    </>
  )
}

export default Logement
