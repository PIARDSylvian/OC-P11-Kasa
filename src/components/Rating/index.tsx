import style from './style.module.scss'
import star from '../../assets/star.svg'

type rate = {
  rate: number
}

const loop = 5
function Rating({ rate }: rate) {
  const stars = []
  for (let i = 0; i < loop; i++) {
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
