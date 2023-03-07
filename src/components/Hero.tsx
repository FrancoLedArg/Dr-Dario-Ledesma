import Link from 'next/link'
import Image from 'next/image'

// Css
import styles from '@styles/Components/Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.hero}>
        <h1 className={styles.title}>Dr Dario Ledesma</h1>
        <h3 className={styles.subtitle}>NEUROLOGO INFANTO-JUVENIL</h3>
        <div className={styles.container}>
          <Link href={'#'} className={styles.button} draggable='false'>
            TURNOS
          </Link>
          <Link href={'#'} className={styles.button} draggable='false'>
            PREGUNTAS
          </Link>
        </div>
        <div className={styles.scroll}>
          <h3 className={styles.scrolltitle}>HAGA SCROLL HACIA ABAJO PARA MAS INFORMACIÓN</h3>
          <div className={styles.wheel}></div>
          <div className={styles.arrows}>
            <Image
              src='/images/arrow.png'
              alt='arrow'
              width={30}
              height={30}
              className={styles.arrow}
            />
            <Image
              src='/images/arrow.png'
              alt='arrow'
              width={30}
              height={30}
              className={styles.arrow2}
            />
            <Image
              src='/images/arrow.png'
              alt='arrow'
              width={30}
              height={30}
              className={styles.arrow3}
            />
          </div>
        </div>
      </div>
  )
}
