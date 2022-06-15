import styles from './styles.module.css'
import briefcase from '../../assets/briefcase.svg'
import github from '../../assets/github.svg'
import globe from '../../assets/globe.svg'
import linkedinIcon from '../../assets/linkedin.svg'
import mailIcon from '../../assets/mail.svg'
import mapPin from '../../assets/map-pin.svg'
import twitter from '../../assets/twitter.svg'
import instaIcon from '../../assets/instaIcon.svg'

interface ContatosProps {
  local?: string;
  work?: string;
  git?: string;
  linkedin?: string;
  twitter?: string;
  site?: string;
  mail?: string;
  insta?: string;
}
export function CardContatos({ local, work, git, linkedin, twitter, site, mail, insta }: ContatosProps) {
  return (
    <div className={styles.card}>
      <ul>
        {local ? <li><a href='#' target='_blank'><img src={mapPin} /> {local}</a></li> : ''}
        {work ? <li><a href='#' target='_blank'><img src={briefcase} /> {work}</a></li> : ''}
        {git ? <li><a href={git} target='_blank'><img src={github} /> {git.split('/')[3]}</a></li> : ''}
        {linkedin ? <li><a href={linkedin} target='_blank'><img src={linkedinIcon} /> {linkedin.split('/')[4].substring(0, 21)}</a></li> : ''}
        {twitter ? <li><a href={twitter} target='_blank'><img src={twitter} /> {twitter}</a></li> : ''}
        {site ? <li><a href={site} target='_blank'><img src={globe} /> {site.split('//')[1]}</a></li> : ''}
        {mail ? <li><a href={mail} target='_blank'><img src={mailIcon} /> {mail}</a></li> : ''}
        {insta ? <li><a href={insta} target='_blank'><img src={instaIcon} /> {insta}</a></li> : ''}
      </ul>
    </div>
  )
}