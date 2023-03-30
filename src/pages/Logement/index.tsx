import { useEffect } from 'react'

function Logement() {
  useEffect(() => {
    document.title = 'Logement - Kasa'
  }, [])
  return <p>Logement</p>
}

export default Logement
