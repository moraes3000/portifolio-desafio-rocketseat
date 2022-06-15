
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
          <CardProfile
            name='Bruno Barbeiro Moraes'
            img='https://avatars.githubusercontent.com/u/29808643?v=4'
            office='Desenvolvedor Web' />

          <CardContatos
            local='Brasil - Mauá - SP'
            git='https://github.com/moraes3000'
            linkedin='https://www.linkedin.com/in/bruno-barbeiro-moraes-bbb043123/'
            site='https://bruno-portifolio-nextjs.vercel.app/'
            mail='bruno_bmoraes@hotmail.com'
            insta='https://www.instagram.com/brun0.moraes/'
          />
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
