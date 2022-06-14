
import styles from './App.module.css'
import { CardContatos } from './components/CardContatos'
import { CardTecnologia } from './components/CardTecnologia'
import { CardProfile } from './components/CardProfile'
import { CardExperiencia } from './components/CardExperiencia'
import { CardEducacao } from './components/CardEducacao'
import { MeusProjetos } from './components/MeusProjetos'
import { ProjetoRecente } from './components/ProjetoRecente'
import { PostRecente } from './components/PostRecent'
import { Blog } from './components/Blog'

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
        <div className={styles.direita}>
          <MeusProjetos />
          <ProjetoRecente />
          <PostRecente />
          <Blog />
        </div>
      </div>
    </>
  )
}

export default App
