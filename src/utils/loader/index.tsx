import data from '../../../backend/data.json'

type params = {
  logementId: string
}

function loader({ logementId }: params) {
  return data.filter(
    (logement) => `${logement.title}-${logement.id}` === logementId
  )[0]
}

export default loader
