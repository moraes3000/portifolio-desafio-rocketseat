import styles from './styles.module.css'
import folder from '../../assets/folder.svg'
import github from '../../assets/git-branch.svg'
import star from '../../assets/star.svg'

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
      <header>
        <img src={folder} /> <strong>Nome do projeto</strong>
      </header>

      <div>
        <p>
          Consulte os códigos de erro que aparecem no painel do veículo Onix.
        </p>
      </div>
      <footer>
        <div>
          <img src={star} /><span>100</span>
          <img src={github} /><span>100</span>
        </div>
        Javascript

      </footer>
    </div>
  )
}