import styles from './styles.module.css'

export function Blog() {
  return (
    <div className={styles.card}>
      <div>
        <img src='https://avatars.githubusercontent.com/u/29808643?v=4' alt='Imagem Avata Github' className={styles.avatar} />
      </div>
      <div>
        <header>
          <strong>Erro adb devices no Genymotion e Android Studio (React Native)</strong>
          <time>2 anos atrás</time>
        </header>
        <div>
          <p>Erro adb devices no Genymotion e Android Studio (React Native)</p>
        </div>
        <footer>
          <span>#react-native</span>
          <span>#genimotion</span>
          <span>#genimotion</span>
          <span>#genimotion</span>
        </footer>
      </div>
    </div>
  )
}