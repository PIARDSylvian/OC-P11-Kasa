import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

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

  console.log(loader)

  return <p>Logement</p>
}

export default Logement
