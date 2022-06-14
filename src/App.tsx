
import styles from './App.module.css'
import { CardContatos } from './components/CardContatos'
import { CardTecnologia } from './components/CardTecnologia'
import { CardProfile } from './components/CardProfile'
import { CardExperiencia } from './components/CardExperiencia'
import { CardEducacao } from './components/CardEducacao'

function App() {


  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.esquerda}>
          <CardProfile />
          <CardContatos />
          <CardTecnologia />
          <CardExperiencia />
          <CardEducacao />
        </div>
        <div className={styles.direita}>Coluna direita</div>
      </div>
    </>
  )
}

export default App
