import style from './style.module.scss'
import star from '../../assets/star.svg'

type RateType = {
  rate: number
}

/**
 * Rating component
 *
 * @param rate
 *
 * @returns JSX.Element
 */
function Rating({ rate }: RateType): JSX.Element {
  const stars = []
  for (let i = 0; i < 5; i++) {
    if (rate <= i) {
      stars.push(
        <img src={star} key={`star-${i}`} alt="star" className={style.def} />
      )
    } else {
      stars.push(
        <img key={`star-${i}`} src={star} alt="star" className={style.fill} />
      )
    }
  }

  return <div className={style.rating__wrapper}>{stars}</div>
}

export default Rating
