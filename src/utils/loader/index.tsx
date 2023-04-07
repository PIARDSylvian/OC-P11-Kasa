import data from '../../../backend/data.json'

type params = {
  logementId: string
}

/**
 * Loader Function
 *
 * @param logementId :string
 *
 * @returns Logement Object OR Undefined
 */
function loader({ logementId }: params): Object {
  return data.filter(
    (logement) => `${logement.title}-${logement.id}` === logementId
  )[0]
}

export default loader
