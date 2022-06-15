import styles from './styles.module.css'

interface ProfileProps {
  img: string;
  name: string;
  office: string;
}

export function CardProfile({ img, name, office }: ProfileProps) {
  return (
    <div className={styles.card}>
      <img src={img} alt='Imagem Avata Github' className={styles.avatar} />
      <strong>{name}</strong>
      <p>{office}</p>
    </div>
  )
}