import Image from "next/image"

import styles from '@styles/Components/About.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <div>
        <Image 
          src=''
        />
        <h3>Titulado en la Universidad Nacional de Tucuman</h3>
      </div>
      <div>
        <h1>Imagen</h1>
        <h3>Jefe de residentes del hospital Garrahan</h3>
      </div>
      <div>
        <h1>Imagen</h1>
        <h3>Mas de 20 años de servicio y miles de pacientes saludables</h3>
      </div>
    </div>
  )
}
