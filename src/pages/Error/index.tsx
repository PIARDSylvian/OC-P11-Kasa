import { useEffect } from 'react'

function Error() {
  useEffect(() => {
    document.title = '404 Error - Kasa'
  }, [])
  return <p>Error</p>
}

export default Error
