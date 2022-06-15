import styles from './styles.module.css'

interface TecnologiaProps {
  title: string;
}
export function CardTecnologia() {
  return (
    <div className={styles.card}>
      <strong>Tecnologia</strong>
      <div className={styles.tecnologiaList}>
        <TecnologiaItem title='Javascript' />
        <TecnologiaItem title='ReactJS' />
        <TecnologiaItem title='Nodejs' />
        <TecnologiaItem title='Git' />
        <TecnologiaItem title='Github' />
        <TecnologiaItem title='html' />
        <TecnologiaItem title='css' />
        <TecnologiaItem title='Django' />
        <TecnologiaItem title='Flutter' />

      </div>
    </div>
  )
}

export function TecnologiaItem({ title }: TecnologiaProps) {
  return (
    <div className={styles.item}>
      {title}
    </div>
  )
}