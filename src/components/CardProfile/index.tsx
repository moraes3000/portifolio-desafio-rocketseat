import styles from './styles.module.css'

export function CardProfile() {
  return (
    <div className={styles.card}>
      <img src='https://avatars.githubusercontent.com/u/29808643?v=4' alt='Imagem Avata Github' className={styles.avatar} />
      <strong>Bruno Barbeiro Moraes</strong>
      <p>Desenvolvedor Web</p>
    </div>
  )
}