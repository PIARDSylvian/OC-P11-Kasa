import style from './style.module.scss'

function Home() {
  return (
    <section>
      <header className={style.header}>
        <h1>Chez vous, partout et ailleurs</h1>
      </header>
      <div className={style.logements_wrapper}>
        <p>Home</p>
      </div>
    </section>
  )
}

export default Home
