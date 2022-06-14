import styles from './styles.module.css'

export function ProjetoRecente() {
  return (
    <div className={styles.wrapper}>
      <ProjetoItem />
      <ProjetoItem />
    </div>
  )
}

export function ProjetoItem() {
  return (
    <div className={styles.card}>
      Item
    </div>
  )
}