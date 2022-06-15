import styles from './styles.module.css'
import folder from '../../assets/folder.svg'
import github from '../../assets/git-branch.svg'
import star from '../../assets/star.svg'
import { useEffect, useState } from 'react'
interface Repository {
  name: string,
  description: string,
  html_url: string,
  stargazers_count: number,
  watchers_count: number,
  clone_url: string,
  language: string,
}

interface RepositoryItemProps {
  repository: {
    name: string,
    description: string,
    html_url: string,
    stargazers_count: number,
    watchers_count: number,
    clone_url: string,
    language: string,
  }
}

export function ProjetoRecente() {
  const [respositories, setRespositories] = useState<Repository[]>([])

  useEffect(() => {
    const url = 'https://api.github.com/users/moraes3000/repos';
    fetch(url).then(response => response.json())
      .then(data => setRespositories(data))

  }, [])

  return (
    <div className={styles.wrapper}>

      {respositories.slice(0, 2).map(repository => (
        <ProjetoItem key={repository.name} repository={repository} />
      ))}
    </div>
  )
}



export function ProjetoItem(props: RepositoryItemProps) {
  return (
    <div className={styles.card}>
      <header>
        <a href={props.repository.clone_url} target='_blank'>
          <img src={folder} /> <strong>{props.repository.name}</strong>
        </a>
      </header>

      <div>
        <p>
          {props.repository.description ? props.repository.description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem I'}
        </p>
      </div>
      <footer>
        <div>
          <img src={star} /><span>{props.repository.stargazers_count}</span>
          <img src={github} /><span>{props.repository.watchers_count}</span>
        </div>
        {props.repository.language}
      </footer>
    </div>
  )
}