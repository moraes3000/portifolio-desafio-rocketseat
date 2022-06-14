import styles from './styles.module.css'

interface ExperienciaProps {
  title: string;
  date: string;
  office: string;
}
export function CardExperiencia() {
  return (
    <div className={styles.card}>
      <strong>Experiencia</strong>
      <div className={styles.CargoList}>
        <Experiencia title='Trabalho 1' date='2021 - atualmente' office='web design' />
        <Experiencia title='Trabalho 1' date='2021 - atualmente' office='web design' />
        <Experiencia title='Trabalho 1' date='2021 - atualmente' office='web design' />

      </div>
    </div>
  )
}

export function Experiencia({ title, date, office }: ExperienciaProps) {
  return (
    <div className={styles.item}>
      <li><strong>{title}</strong> <span className={styles.date}>{date}</span><span className={styles.office}>{office}</span></li>
    </div>
  )
}