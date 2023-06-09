import { useEffect } from 'react'
import Collapse from '../../components/Collapse'
import style from './style.module.scss'
import Banner from '../../components/Banner'
import Cover from '../../assets/a-propos-header.jpg'

/**
 * Render page APropos
 *
 * @returns JSX.Element
 */
function APropos(): JSX.Element {
  // Set title page on first load
  useEffect(() => {
    document.title = 'A-propos - Kasa'
  }, [])

  return (
    <section>
      <Banner height={223} mobileHeight={111} cover={Cover}></Banner>
      <div className={style.collapse_wrapper}>
        <Collapse
          collapseTitle="Fiabilité"
          collapseList={[
            'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
          ]}
        />
      </div>
      <div className={style.collapse_wrapper}>
        <Collapse
          collapseTitle="Respect"
          collapseList={[
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
          ]}
        />
      </div>
      <div className={style.collapse_wrapper}>
        <Collapse
          collapseTitle="Service"
          collapseList={[
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
          ]}
        />
      </div>
      <div className={style.collapse_wrapper}>
        <Collapse
          collapseTitle="Sécurité"
          collapseList={[
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
          ]}
        />
      </div>
    </section>
  )
}

export default APropos
