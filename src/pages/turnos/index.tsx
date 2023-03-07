import { useState } from 'react'

// Css
import styles from '../../styles/turnos/turnos.module.css'

export default function Turnos() {
  const [dni, setDni] = useState(null)
  const [paciente, setPaciente] = useState([])

  function handleChange (e: any) {
    setDni(e.target.value)
  }

  async function handleClick (e) {
    e.preventDefault()
    try {
      const res = await fetch(`/api/paciente/readOne?id=${dni}`)
      const data = res.json()
      setPaciente(data)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form className={styles.form}>
      <div className={styles.dni_container}>
        <label className={styles.input_label}>
          <input
            type="number"
            placeholder=' '
            onChange={handleChange}
            className={styles.input_number}
          />
          <span className={styles.input_span}>DNI del Paciente</span>
        </label>
        <button
          onClick={handleClick}
          className={styles.dni_button}
        >
          Confirmar
        </button>
      </div>

    </form>
  )
}
