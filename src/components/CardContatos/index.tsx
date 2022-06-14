import styles from './styles.module.css'
import briefcase from '../../assets/briefcase.svg'
import github from '../../assets/github.svg'
import globe from '../../assets/globe.svg'
import linkedin from '../../assets/linkedin.svg'
import mail from '../../assets/mail.svg'
import mapPin from '../../assets/map-pin.svg'
import twitter from '../../assets/twitter.svg'

export function CardContatos() {
  return (
    <div className={styles.card}>
      <ul>
        <li><a href='#'><img src={mapPin} /> Brasil</a></li>
        <li><a href='#'><img src={briefcase} /> Trabalho</a></li>
        <li><a href='#'><img src={github} /> moraes3000</a></li>
        <li><a href='#'><img src={linkedin} /> Linkedin</a></li>
        <li><a href='#'><img src={twitter} /> Twitter</a></li>
        <li><a href='#'><img src={globe} /> Blog</a></li>
        <li><a href='#'><img src={mail} /> Email</a></li>
      </ul>
    </div>
  )
}